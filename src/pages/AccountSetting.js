import React, { useState } from 'react'
import styles from './../styles/account.module.css';
import { makeStyles, withStyles } from "@material-ui/styles";
import { ButtonBase } from "@material-ui/core";
import Organization from './AccountSetting/Organization';
import Members from './AccountSetting/Members';
import Teams from './AccountSetting/Teams';
import Projects from './AccountSetting/Projects';
import Authorization from './AccountSetting/Authorization';


const StyledButton = withStyles(() => (
    {

        root: {
            // marginRight: "2rem",
            // width: "100%",
            padding: "0.8rem 1rem 0.8rem 1rem",
            fontSize: "1rem",
            // borderRadius: "0rem",
            color: "black",
            fontWeight: "600",
            textTransform: "capitalize",
            // backgroundColor: "#6FDFDF",
            // border: "2px solid white",
            // borderRadius: "5px",
            // fontFamily: "montserrat",
            // letterSpacing: "1px"
        }
    }))(ButtonBase);


const useStyles = makeStyles(() => ({
    buttonContainerWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    buttonContainer: {
        // backgroundColor: "#ccc",
        // border: "1px solid #000",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between"
    },
    lastButtonFilter: {
        marginRight: "0rem"
    },
    activeButton: {
        // background: "#5534A5",
        color: "blue",
        borderBottom: "2.2px solid blue",
    }
}));

function AccountSetting() {

    const menu1 = [
        {
            name: 'Organization',
            href: '#',
            current: <Organization />
        }
    ]
    const menu2 = [
        {
            name: 'Members',
            href: '#',
            current: <Members />
        }
    ]
    const menu3 = [
        {
            name: 'Teams',
            href: '#',
            current: <Teams />
        }
    ]
    const menu4 = [
        {
            name: 'Projects',
            href: '#',
            current: <Projects />
        }
    ]
    const menu5 = [
        {
            name: 'Authorization',
            href: '#',
            current: <Authorization />
        }
    ]


    const [tab, setTab] = useState(menu1);


    const handletab = (e) => {

        setTab(menu1);
        setActiveButton("first");
    }

    const handletab2 = (e) => {

        setTab(menu2);
        setActiveButton("second");
    }
    const handletab3 = (e) => {

        setTab(menu3);
        setActiveButton("third");
    }
    const handletab4 = (e) => {

        setTab(menu4);
        setActiveButton("fourth");
    }
    const handletab5 = (e) => {

        setTab(menu5);
        setActiveButton("fifth");
    }



    const [menu, setMenu] = useState()

    const classes = useStyles();
    const [activeButton, setActiveButton] = useState('first');




    return (
        <div className='AccountSet'>

            <div
            // className='bg-account'
            >

                <div className={styles.accountTop}>
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="mt-9 text-3xl font-semibold text-gray-900">
                                    Account Settings</h1>
                                {/* <p className="mt-2 text-md text-gray-700">
                                    Use this page to see all feature flags in this project. Select a flag to manage the environment-specific targeting and rollout rules.
                                </p> */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr style={{ color: 'white' }} /> */}


                <div className={styles.outer}>
                    <div className="inner">
                        <StyledButton
                            // className="btn-item"
                            className={activeButton === "first" ? `${classes.activeButton}` : ""}
                            onClick={handletab}>
                            Organization
                        </StyledButton>
                    </div>
                    <div className="inner">
                        <StyledButton
                            className={activeButton === "second" ? `${classes.activeButton}` : ""}
                            onClick={handletab2} >
                            Members
                        </StyledButton>
                    </div>
                    <div className="inner">
                        <StyledButton
                            className={activeButton === "third" ? `${classes.activeButton}` : ""}
                            onClick={handletab3} >
                            Teams
                        </StyledButton>
                    </div>
                    <div className="inner">
                        <StyledButton
                            className={activeButton === "fourth" ? `${classes.activeButton}` : ""}
                            onClick={handletab4} >
                            Projects
                        </StyledButton>
                    </div>
                    <div className="inner">
                        <StyledButton
                            className={activeButton === "fifth" ? `${classes.activeButton}` : ""}
                            onClick={handletab5} >
                            Authorization
                        </StyledButton>
                    </div>
                </div>


            </div>

            <div className={styles.lineAS} />
            <div className={styles.acComp}>

                {
                    tab && (Object.entries(tab).map(tab => {
                        // console.log(item)
                        return (
                            <div>
                                <div className='mainCont'>
                                    {tab.map(({ name, href, current }) => (


                                        <div className='current-t'>

                                            {current}
                                        </div>
                                    )
                                    )}     </div>
                            </div>
                        )
                    }))
                }
            </div>












        </div>
    )
}

export default AccountSetting