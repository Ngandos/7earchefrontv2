import useClient from "../../../hooks/useClient";
import { ReactElement } from "react";
import Client from "../../Client/Client";
import React from "react";

const ClientPage = () => {

    const { client } = useClient();

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

    if (Client?.length) {

        pageContent = client.map((client) => {

            return (

                <Client
                    id = {client.id}
                    nom = { client.nom }
                    prenom = {client.prenom }
                    numCompte = { client.numCompte }
                    nbCommandes = {client.nbCommandes}
                />
            )
        })
    }
    const content = (
        <main className="main main--client">
            { pageContent }
        </main>
    )
    return content
}

export default ClientPage;