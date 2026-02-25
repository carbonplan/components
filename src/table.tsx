import React, { ReactNode } from 'react'
import { Box, ThemeUIStyleObject } from 'theme-ui'
import Row from './row'
import Column from './column'

/**
 * A responsive value that maps to screen breakpoints
 * `[mobile (<40em), tablet (≥40em), desktop (≥64em), large (≥102em)]`.
 * A single number applies to all breakpoints; an array specifies per-breakpoint values.
 *
 * Arrays of length 1, 2, or 4 are supported:
 * - `[n]` — same value at all breakpoints
 * - `[a, b]` — `a` for mobile and tablet, `b` for desktop and large
 * - `[mobile, tablet, desktop, large]` — explicit value at each breakpoint
 *
 * Note: this differs from theme-ui's native responsive arrays (e.g. in `sx`),
 * where the last value carries forward to all larger breakpoints. Here, `[a, b]`
 * is expanded to `[a, a, b, b]` (split at 64em), whereas theme-ui would treat it
 * as `a` below 40em and `b` at 40em+ (split at 40em).
 */
type ResponsiveNumber = number | number[]

const styles = {
  reset: {
    verticalAlign: 'baseline' as const,
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
  },
  row: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
    pt: [3, 3, 3, '20px'],
    pb: [3, 3, 3, '20px'],
    mb: ['2px'],
  },
  header: {
    display: 'block',
    textTransform: 'uppercase' as const,
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  index: {
    display: 'block',
    textTransform: 'uppercase' as const,
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2, 2, 2, 3],
  },
  entry: {
    display: 'block',
    fontSize: [2, 2, 2, 3],
    fontFamily: 'faux',
    letterSpacing: 'faux',
    mb: ['1px'],
    mt: [2, 0, 0, 0],
  },
}

/**
 * A table built on the CarbonPlan grid system.
 *
 * `start` and `width` are arrays with one entry per table column.
 * Each entry is a {@link ResponsiveNumber} controlling that column's
 * grid position or span.
 *
 * @example
 * // 2-column table: stacked on mobile, side-by-side on tablet+
 * // (from soil-protocols-explainer/metric-table)
 * <Table
 *   columns={[6]}
 *   start={[
 *     [1, 1, 1, 1],
 *     [1, 3, 3, 3],
 *   ]}
 *   width={[
 *     [6, 2, 2, 2],
 *     [6, 4, 4, 4],
 *   ]}
 *   data={[
 *     ['Rigor', 'Approach to quantifying soil carbon...'],
 *     ['Additionality', 'Approach to analyzing causal relationship...'],
 *   ]}
 * />
 */
export interface TableProps {
  /**
   * The tabular data as a 2D array: `data[row][tableColumn]`.
   * Each inner array is a row; each element becomes a `<td>`.
   * Elements can be strings, numbers, or React nodes.
   */
  data: ReactNode[][]
  /**
   * Total number of grid columns the table spans, as a responsive value.
   * This is passed to the underlying `Row` component and controls the
   * grid template, not the number of visible table columns.
   *
   * @example
   * columns={[6]}              // 6 grid columns at all breakpoints
   * columns={[4, 6, 6, 6]}    // 4 on mobile, 6 on tablet+
   */
  columns: ResponsiveNumber
  /**
   * Grid column where each table column starts, as an array with one entry
   * per table column. Each entry is a {@link ResponsiveNumber}.
   *
   * - Outer array length = number of table columns (must match `data[n].length`)
   * - Inner value = grid column start position, optionally responsive
   *
   * @example
   * // 2 table columns: stacked on mobile, side-by-side on tablet+
   * // (from soil-protocols-explainer/metric-table)
   * start={[
   *   [1, 1, 1, 1],    // table col 0 starts at grid col 1 at all breakpoints
   *   [1, 3, 3, 3],    // table col 1 starts at grid col 1 on mobile, 3 on tablet+
   * ]}
   *
   * // 5 table columns: stacked on mobile, spread across grid on tablet+
   * // (from ton-year-explainer/examples-table)
   * start={[
   *   [1, 1, 1, 1],    // table col 0 at grid col 1
   *   [1, 3, 3, 3],    // table col 1 at grid col 1 on mobile, 3 on tablet+
   *   [2, 4, 4, 4],    // table col 2 at grid col 2 on mobile, 4 on tablet+
   *   [3, 5, 5, 5],    // ...
   *   [4, 6, 6, 6],
   * ]}
   */
  start: ResponsiveNumber[]
  /**
   * Number of grid columns each table column spans, as an array with one
   * entry per table column. Each entry is a {@link ResponsiveNumber}.
   *
   * - Outer array length = number of table columns (must match `data[n].length`)
   * - Inner value = grid column span, optionally responsive
   *
   * @example
   * // 2 table columns: full-width on mobile, split on tablet+
   * // (from soil-protocols-explainer/metric-table)
   * width={[
   *   [6, 2, 2, 2],    // table col 0 spans 6 grid cols on mobile, 2 on tablet+
   *   [6, 4, 4, 4],    // table col 1 spans 6 grid cols on mobile, 4 on tablet+
   * ]}
   *
   * // 5 table columns: label full-width on mobile, all 1-col on tablet+
   * // (from ton-year-explainer/examples-table)
   * width={[
   *   [4, 2, 2, 2],    // table col 0 (label) spans 4 on mobile, 2 on tablet+
   *   [1, 1, 1, 1],    // table cols 1-4 always span 1 grid col
   *   [1, 1, 1, 1],
   *   [1, 1, 1, 1],
   *   [1, 1, 1, 1],
   * ]}
   */
  width: ResponsiveNumber[]
  /** Whether to style the first table column as an index with uppercase heading font. @default true */
  index?: boolean
  /** Whether to render a border below the last row. @default true */
  borderBottom?: boolean
  /** Whether to render a border above the first row. @default true */
  borderTop?: boolean
  /** Theme UI style overrides applied to the outer `<table>` element. */
  sx?: ThemeUIStyleObject
  /** Theme UI color for the header row text (e.g. `'secondary'`, `'orange'`). */
  color?: string
  /** Content rendered in a header row above the data rows. */
  header?: ReactNode
}

const Table = ({
  data,
  sx,
  color,
  header,
  columns,
  start,
  width,
  index = true,
  borderBottom = true,
  borderTop = true,
}: TableProps) => {
  if (!start || !columns || !width) {
    throw new Error('Must provide columns, start, and width')
  }
  return (
    <Box as='table' sx={{ display: 'block', ...sx }}>
      <Box as='tbody' sx={{ display: 'block' }}>
        {header && (
          <Row
            as='tr'
            sx={{
              ...styles.reset,
              ...styles.header,
              ...styles.row,
              color: color,
              borderTopWidth: !borderTop ? '0px' : '1px',
            }}
          >
            <Column as='td' start={[1]} width={columns} sx={styles.index}>
              {header}
            </Column>
          </Row>
        )}
        {data.map((row, i) => {
          return (
            <Row
              as='tr'
              columns={columns}
              key={i}
              sx={{
                ...styles.reset,
                ...styles.row,
                pb:
                  borderBottom && i === data.length - 1
                    ? ['18px', '18px', '18px', '22px']
                    : [3, 3, 3, '20px'],
                borderBottomWidth:
                  borderBottom && i === data.length - 1 ? '1px' : '0px',
                borderTopWidth:
                  !borderTop && i === 0 && !header ? '0px' : '1px',
              }}
            >
              {row.map((column, j) => {
                return (
                  <Column
                    as='td'
                    key={j}
                    start={start[j]}
                    width={width[j]}
                    sx={
                      j === 0 && index
                        ? { ...styles.reset, ...styles.index }
                        : { ...styles.reset, ...styles.entry }
                    }
                  >
                    {column}
                  </Column>
                )
              })}
            </Row>
          )
        })}
      </Box>
    </Box>
  )
}

export default Table
