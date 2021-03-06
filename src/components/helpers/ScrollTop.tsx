import { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

function ScrollToTop() {
    const history = useHistory();
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unListen();
        }
    }, [history]);

    return (null);
}

export default withRouter(ScrollToTop);