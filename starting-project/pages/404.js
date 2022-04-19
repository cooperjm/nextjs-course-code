import { Fragment } from 'react';
import Button from '../components/ui/button';
import classes from './404.module.css';

export default function Custom404() {
	return (
		<Fragment>
			<div className={classes.container}>
				<div>
					<img
						src='/images/404olta.gif'
						alt='Where is everything?'
						title='Where is everything?'
					/>
          <Button link="/">Events</Button>
				</div>
			</div>
		</Fragment>
	);
}
