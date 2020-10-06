//@ts-nocheck
import { Button, Input } from "@chakra-ui/core";
import React from "react";
import { getDetails, getPrefix, updatePrefix } from "../../utils/api";
import { Formik } from "formik";

export function Dashboard(props: any) {

    console.log(props.match.params.id)

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [prefix, setPrefix] = React.useState();

    React.useEffect(() => {
        getDetails().then(({ data }) => {
            setUser(data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            props.history.push("/");
            setLoading(false);
        });
        getPrefix(props.match.params.id).then(({ data }) => {
            console.log(data);
            setPrefix(data.prefix)
        });
    }, []);

    return !loading ? (
        <div>
            <h1>Dashboard</h1>
            <Formik initialValues={{ prefix }}
            onSubmit={async (values) => {
                await updatePrefix(props.match.params.id, values.Prefix);
            }}
            >
                {
                    (props) => (
                        <form onSubmit={props.handleSubmit}>
                            <Input type="text" name="Prefix" onChange={props.handleChange} defaultValue={prefix} />
                            <Button type="submit" variantColor="blue" children="Update Prefix" />
                        </form>
                    )
                }
            </Formik>
        </div>
    ) : null
}