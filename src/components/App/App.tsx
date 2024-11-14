import Header from '../Header/Header';
import Nav from '../Nav/Nav';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<Header />
			<Nav />
		</div>
	);
};

export default App;
