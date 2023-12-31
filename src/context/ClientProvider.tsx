import { ReactElement, createContext, useState, useEffect } from "react";

export type ClientType = {
  id: number;
  nom: string;
  prenom: string;
  numCompte: string;
  commandes: string[]; // Specify the type for commandes
  adresses: string[]; // Specify the type for adresses
};

export class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchError';
  }
}

const initState: ClientType[] = [];

export type UseClientContextType = { clients: ClientType[] }; // Update property name to be plural

const initContextState: UseClientContextType = { clients: [] }; // Update property name to be plural

const ClientContext = createContext<UseClientContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ClientProvider = ({ children }: ChildrenType): ReactElement => {
  const [clients, setClients] = useState<ClientType[]>(initState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchClient = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:8080/demo/client');
        if (!response.ok) {
          throw new FetchError(`Failed to fetch data: ${response.statusText}`);
        }

        const data: ClientType[] = await response.json();
        setClients(data);
      } catch (err) {
        if (err instanceof FetchError) {
          setError(err);
        } else {
          setError(new FetchError('An unexpected error occurred.'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ClientContext.Provider value={{ clients }}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContext;
