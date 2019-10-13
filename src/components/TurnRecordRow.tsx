import React from 'react';
import { TurnTiming } from './Calculator';
import { classNameFor } from './TurnList';

/**
 * Encapsulates the data need to display an image for a turn.
 */
export interface TurnIcon {
    imageName: string;
    description: string;
}

export interface TurnRecordRowProps {
    roundNumber: number;
    icons?: TurnIcon[];
    description: string;
    turnTiming: TurnTiming;
}

/**
 * A row in the list of turns taken or projected for this scenario.
 * @param props React props for this component. See: `TurnRecordProps`.
 */
const TurnRecordRow = (props: TurnRecordRowProps) => {
    return (
        <tr className={`TurnRecordRow ${classNameFor(props.turnTiming)}`}>
            <th className="TurnRoundNumber" scope="row">{props.roundNumber}</th>
            <td>
            {props.icons &&
                <div className="TurnIcons">
                {props.icons.map(icon => 
                    <img src={icon.imageName} alt={icon.description} />
                )}
                </div>
            }
            </td>
            <td className="TurnDescription">{props.description}</td>
        </tr>
    );
};

export default TurnRecordRow;