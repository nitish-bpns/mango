import React, { useState } from 'react'
import styles from './../styles/home.module.css';
import { makeStyles, withStyles } from "@material-ui/styles";
import { ButtonBase } from "@material-ui/core";


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
            current: ''
        }
    ]
    const menu2 = [
        {
            name: 'Members',
            href: '#',
            current: ''
        }
    ]
    const menu3 = [
        {
            name: 'Teams',
            href: '#',
            current: ''
        }
    ]
    const menu4 = [
        {
            name: 'Projects',
            href: '#',
            current: ''
        }
    ]
    const menu5 = [
        {
            name: 'Authorization',
            href: '#',
            current: ''
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


    const [menu, setMenu] = useState()

    const classes = useStyles();
    const [activeButton, setActiveButton] = useState('first');




    return (
        <div className='AccountSet'>

            <div className='bg-account'>

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
                <hr style={{ color: 'white' }} />


                <div className='outer'>
                    <div className="inner">
                        <StyledButton
                            // className="btn-item"
                            className={activeButton === "first" ? `${classes.activeButton}` : ""}
                            onClick={handletab}

                        >
                            Targeting
                        </StyledButton>
                    </div>
                    <div className="inner">
                        <StyledButton
                            className={activeButton === "second" ? `${classes.activeButton}` : ""}
                            onClick={handletab2} >
                            Variation
                        </StyledButton>
                    </div>
                </div>


                {
                    tab && (Object.entries(tab).map(tab => {
                        // console.log(item)
                        return (
                            <div>
                                <div className='brand-box'>

                                    <div className={styles.lineAS} />

                                </div>
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