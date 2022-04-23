
const index = ({ user }) => {
    const username = user && user.name;
    return <div>{username}</div>;
};

export const getServerSideProps = async () => {
    try {
        const res = await fetch("http://api.github.com/users/whdk999");
        if (res.status === 200) {
            const user = await res.json();
            return { props: { user } }; //현재 page 의 props 로 전달되게 된다. 
        }
        return { props: {} };
    } catch (e) {
        console.log(e);
        return { props: {} };
    }
}

export default index;