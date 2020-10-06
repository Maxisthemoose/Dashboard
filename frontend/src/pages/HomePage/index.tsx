import React from "react";
import { Button } from "@chakra-ui/core";

export function HomePage(props: any) {
    const login = () => {
        console.log(process.env.BASE_URI)
        return window.location.href = `http://localhost:3001/api/login`
    };
    return (
        <Button 
            variantColor="blue" 
            onClick={login}
        >Login</Button>
    )
}