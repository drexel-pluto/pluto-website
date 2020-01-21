import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const route = router.asPath;
    return route;
};
