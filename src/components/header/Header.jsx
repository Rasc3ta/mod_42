import profile from './../../assets/images/boy1.png';

const Header = () => {


    return (
        <header className='flex justify-between max-w-[80vw] my-[2rem] border-b-2 border-gray-400 pb-[1rem] mx-auto'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={profile} className='size-11' alt="" />
        </header>
    );
};

export default Header;