import React from "react";
import { Link } from "react-router-dom";


export function MenuPage(props: any) {

    const guilds = props.guilds;

    return (
        <div>
            <h1>Hello World</h1>
            {guilds.map((guild: any, key: any) => (
                <div>
                    <li>{guild.name}</li>
                    <Link to={`/dashboard/${guild.id}`}>Dashboard</Link>
                </div>
            ))}
        </div>
    )
}