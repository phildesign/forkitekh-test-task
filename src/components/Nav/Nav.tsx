import styles from './Nav.module.scss';

interface INav {
	id: number;
	name: string;
	link: string;
}

const navArr: INav[] = [
	{ id: 1, name: 'Преимущества Tele2', link: '#' },
	{ id: 2, name: 'Тарифы', link: '#' },
	{ id: 3, name: 'Акции и спецпредложения', link: '#' },
	{ id: 4, name: 'Промотариф Tele2', link: '#' },
	{ id: 5, name: 'Технология eSIM', link: '#' },
	{ id: 6, name: 'Подключение нового абонента', link: '#' },
];

const Nav = (): JSX.Element => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				{navArr.map((item) => {
					return (
						<a href={item.link} className={styles.link} key={item.id}>
							{item.name}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Nav;
