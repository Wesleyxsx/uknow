//---------- Custom Imports ----------
const Pessoa = require("./Pessoa");


//---------- Classes ----------
class Aluno extends Pessoa
{
    #carteira;

    /**
     * Default Constructor
     * 
     * @param {String} id 
     * @param {String} nome 
     * @param {Number} idade 
     * @param {String} cpf 
     * @param {String} senha 
     * @param {String} email 
     * @param {Carteira} carteira
     */
    constructor(id, nome, idade, cpf, senha, email, carteira)
    {
        super(id, nome, idade, cpf, senha, email);

        this.#carteira = carteira;
    }//end constructor()

    //--------- get(s) and set(s) ---------
    /**
     * Get Carteira
     * 
     * @returns {Carteira}
     */
    getCarteira()
    { return(this.#carteira); }

    /**
     * Set Carteira
     * 
     * @param {Carteira} carteira 
     */
    setCarteira(carteira)
    { this.#carteira = carteira; }
}//end class


//---------- Exports -----------
module.exports = Aluno;