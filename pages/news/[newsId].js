import {useRouter} from 'next/router';

const DetailNews = () => {
    const router = useRouter();
    const routerId = router.query.newsId;

    return (
        <>
            <h1>The DetailNews Page</h1>
            <p>{routerId}</p>
        </>
    )
}

export default DetailNews