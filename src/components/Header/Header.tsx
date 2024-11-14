import Bell from '../Bell/Bell';
import City from '../City/City';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<div className={styles.top}>
				<div className={styles.container}>
					<Logo />
					<City />
					<Bell />
				</div>
			</div>
		</div>
	);
};

export default Header;
