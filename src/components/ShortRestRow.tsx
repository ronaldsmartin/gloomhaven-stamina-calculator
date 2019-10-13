import React from 'react';
import { TurnTiming } from './Calculator';
import { classNameFor } from './TurnList';

export interface ShortRestRowProps {
    turnTiming: TurnTiming;
}

/**
 * Table row for a "short rest" taken after a turn.
 */
const ShortRestRow = (props: ShortRestRowProps) => 
<tr className={`ShortRestRow ${classNameFor(props.turnTiming)}`}>
    <td>{ /* Round number column is the same as the previous row. */ }</td>
    <td>{ /* No icon */ }</td>
    <td className="TurnDescription ShortRestDescription">Short rest!</td>
</tr>;

export default ShortRestRow;