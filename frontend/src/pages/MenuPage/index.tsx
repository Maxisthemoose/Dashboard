import { Button } from "@chakra-ui/core";
import { MenuPage as MenuComponent } from "../../components";
import React from "react";
import { getDetails, getGuilds } from "../../utils/api";

export function MenuPage(props: any) {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [guilds, setGuilds] = React.useState([]);

    React.useEffect(() => {
        getDetails()
            .then(({ data }) => {
                setUser(data);
                setLoading(false);
                return getGuilds();
            }).then(({ data }) => {
                setGuilds(data);
            }).catch(err => {
                props.history.push("/");
                setLoading(false);
            });
    }, []);

    return !loading ? (
        <div>
            <h1>Menu Page</h1>
            <MenuComponent guilds={guilds} />
        </div>
    ) : null;
}