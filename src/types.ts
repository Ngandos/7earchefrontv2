export interface InputArticleData {
    id: number,
    ref: string,
    categorie: string,
    nom: string,
    prixTTC: number,
    designation: string
}

export interface InputClientData {
    id: number, 
    nom: string,
    prenom: string,
    email: string,
    idAdresse: number,
    accountNumber: string,
    passedCommands: number
}

export interface InputCategorieData {
    id: number,
    nom: string,
    descritpion: string
}

export interface InputAuteurData {
    id: number, 
    nom: string
}

export interface InputEditeurData {
    id: number,
    enseigne: string
}