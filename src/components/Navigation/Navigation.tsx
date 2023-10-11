'use client';

import { MdFaceRetouchingNatural, MdOutlineAlternateEmail } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { NavigationProps } from './Navigation.props';
import { styles } from './Navigation.styles';
import { Link } from 'react-scroll';
import { Sections } from '@/enums/Sections';
import { Typography } from '@/elements/Typography/Typography';

export function Navigation({}: NavigationProps): JSX.Element {
    return (
        <div className={styles.nav}>
            <div className={styles.navLine}>
                <Link data-id="logo" to={Sections.Home} smooth={true} duration={500} className="cursor-pointer">
                    <p className={styles.logo}>Nextwebs</p>
                </Link>
                <div className={styles.textLinks}>
                    <Link to={Sections.About} smooth={true} duration={500} className="cursor-pointer">
                        <Typography variant="strong" className="text-center">
                            About
                        </Typography>
                    </Link>
                    <Link to={Sections.Influencers} smooth={true} duration={500} className="cursor-pointer">
                        <Typography variant="strong" className="text-center">
                            Pricing
                        </Typography>
                    </Link>
                    <Link to={Sections.Contact} smooth={true} duration={500} className="cursor-pointer">
                        <Typography variant="strong" className="text-center">
                            Contact
                        </Typography>
                    </Link>
                    <Link to="">
                        <div className={styles.tryButton}>Try it free</div>
                    </Link>
                </div>

                <div className={styles.icons}>
                    <Link to={Sections.About} smooth={true} duration={500} className="cursor-pointer">
                        <MdFaceRetouchingNatural size={32} />
                    </Link>
                    <Link to={Sections.Influencers} smooth={true} duration={500} className="cursor-pointer">
                        <HiOutlineUserGroup size={32} />
                    </Link>
                    <Link to={Sections.Contact} smooth={true} duration={500} className="cursor-pointer">
                        <MdOutlineAlternateEmail size={32} />
                    </Link>
                    {/* <div onClick={toggleTheme}>{mode === 'light' ? <TbBulb size={32} /> : <TbBulbOff size={32} />}</div> */}
                </div>
            </div>
        </div>
    );
}
