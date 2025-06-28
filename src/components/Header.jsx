import logo from '../imagens/logo.png';

const Header = () => {
    return ( 
        <>
             <header className="bg-green-600 text-white p-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Logo ENEM" height="50px"/>
                    <h1 className="text-2xl font-bold">Projeto ENEM</h1>
                </div>
            </header>
        </>
     );
}
 
export default Header;