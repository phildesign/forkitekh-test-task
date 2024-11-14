import Header from '../Header/Header';

import styles from './App.module.scss';

const App = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<Header />
		</div>
	);
};

export default App;
