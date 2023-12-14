import style from './MouseAnimation.module.css';

const MouseAnimation = ({ isScrolled, isScrollIconVisible }) => {
	return (
		<div
			className={`${style['scroll-down']} ${
				!isScrolled && isScrollIconVisible ? '' : style.hidden
			}
			}`}
          >

			<div className={style.mousey}>
				<div className={style.scroller}></div>
			</div>
		</div>
	);
};

export default MouseAnimation;
