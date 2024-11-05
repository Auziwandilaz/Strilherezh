import clsx from "clsx";
import { Typography } from "../../design-system/typography/Typography";
import { title } from "process";

interface Props { 
    className?: string;
}

function Item({array, title, round}: {array: [], title: string, round: boolean}) {
    if (array) {
        return (
            array.map(name => {
                <label>
                    <input 
                    type={clsx(round ? "radio" : "checkbox")} 
                    name={clsx(`${title}`)} 
                    value={clsx(`${name}`)}
                    />
                    {name}
                </label>
            })
        );
    }
}


export const FilterCard = ({className, title}:Props) => {
    <form action="/filter" method="post">
            <p>

            </p>
    </form>
}
