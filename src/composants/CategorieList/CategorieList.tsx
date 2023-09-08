import { ReactElement } from 'react';
import useCategories from '../../hooks/useCategorie';
import Categorie from '../Categorie/Categorie';
import '../ComponentsStyles/CategorieList.styled.css';
import '../images/ID.Visuelle/CinemaBandeauCouleur.jpeg';

const CategorieList = () => {
	const { Categories } = useCategories();

	let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

	if (Categories?.length) {
		pageContent = Categories.map((categorie) => {
			return (
				<Categorie
					key={categorie.id}
					categorie={categorie}
					nom={categorie.nom}
					description={categorie.description}
				/>
			);
		});
	}
	const content = <main className='main main--categorie'>{pageContent}</main>;
	return content;
};

export default CategorieList;

