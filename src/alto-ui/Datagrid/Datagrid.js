import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { bemClass } from '../helpers/bem';
import DatagridHeaderRow from './components/DatagridHeaderRow';
import DatagridRow from './components/DatagridRow';

import './Datagrid.scss';

class Datagrid extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    // fix scroll initial value
    setTimeout(() => {
      this.staticHeaderNode.scrollLeft = 0;
      this.frozenRowsNode.scrollTop = 0;
      this.staticRowsNode.scrollLeft = 0;
      this.staticRowsNode.scrollTop = 0;
      this.setState({ loaded: true });
    }, 0);
  }

  render() {
    const { className, columns, rows, rowKeyField } = this.props;
    const staticColumns = columns.filter(({ frozen }) => !frozen);
    const frozenColumns = columns.filter(({ frozen }) => frozen);
    const headersCount = 1;

    return (
      <div
        role="grid"
        aria-rowcount={headersCount + rows.length}
        className={bemClass('Datagrid', { loaded: this.state.loaded }, className)}
      >
        <div role="rowgroup" className="Datagrid__head">
          <div role="presentation" className={bemClass('Datagrid__header-row', { frozen: true })}>
            <DatagridHeaderRow rowIndex={1} columns={frozenColumns} />
          </div>
          <div role="presentation" className={bemClass('Datagrid__header-row', { static: true })}>
            <PerfectScrollbar
              ref={ps => {
                this.staticHeaderPS = ps;
              }}
              containerRef={node => {
                this.staticHeaderNode = node;
              }}
              onScrollX={() => {
                this.staticRowsNode.scrollLeft = this.staticHeaderNode.scrollLeft;
              }}
            >
              <DatagridHeaderRow
                rowIndex={1}
                columns={staticColumns}
                columnIndexStart={frozenColumns.length}
              />
            </PerfectScrollbar>
          </div>
        </div>

        <div role="rowgroup" className="Datagrid__body">
          <div role="presentation" className={bemClass('Datagrid__rows', { frozen: true })}>
            <PerfectScrollbar
              ref={ps => {
                this.frozenRowsPS = ps;
              }}
              containerRef={node => {
                this.frozenRowsNode = node;
              }}
              onScrollY={() => {
                this.staticRowsNode.scrollTop = this.frozenRowsNode.scrollTop;
              }}
            >
              {rows.map((row, index) => (
                <DatagridRow
                  key={rowKeyField(row)}
                  columns={frozenColumns}
                  row={row}
                  index={index + headersCount}
                />
              ))}
            </PerfectScrollbar>
          </div>
          <div role="presentation" className={bemClass('Datagrid__rows', { static: true })}>
            <PerfectScrollbar
              ref={ps => {
                this.staticRowsPS = ps;
              }}
              containerRef={node => {
                this.staticRowsNode = node;
              }}
              onScrollX={() => {
                this.staticHeaderNode.scrollLeft = this.staticRowsNode.scrollLeft;
              }}
              onScrollY={() => {
                this.frozenRowsNode.scrollTop = this.staticRowsNode.scrollTop;
              }}
            >
              {rows.map((row, index) => (
                <DatagridRow
                  key={rowKeyField(row)}
                  columns={staticColumns}
                  row={row}
                  index={index + headersCount}
                  columnIndexStart={frozenColumns.length}
                />
              ))}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    );
  }
}

Datagrid.displayName = 'Datagrid';

Datagrid.defaultProps = {};

Datagrid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  rowKeyField: PropTypes.func.isRequired,
};

export default Datagrid;

/*
iv(role="grid")
  div(role="presentation")
  div(role="row")
    div(role="columheader") foo
    div(role="columnheader") bar
  div(role="presentation")
  each cols, i in Array(50)
    div(role="row")
      each cols, j in Array(20)
        div(role="gridcell") #{i} - #{j}

*/
