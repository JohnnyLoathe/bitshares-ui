import React from "react";
import {connect} from "alt-react";
import SettingsStore from "../../../stores/SettingsStore";
import Ps from "perfect-scrollbar";
import PropTypes from "prop-types";

class GdexAgreementModal extends React.Component {
    static propTypes = {
        locale: PropTypes.string
    };

    constructor(props) {
        super();
        this.state = {
            locale: props.settings.get("locale", "en")
        };
    }

    componentDidMount() {
        // console.log(this.refs);
        if (this.refs.agreement) {
            let item = this.refs.agreement;
            // console.log(item);
            Ps.initialize(item);
        }
    }

    componentDidUpdate() {
        // console.log(this.refs);
        if (this.refs.agreement) {
            let item = this.refs.agreement;
            // console.log(item);
            Ps.update(item);
        }
    }

    _getAgreement(locale) {
        switch (locale) {
            case "zh":
            case "cn":
                return (
                    <div
                        className="container"
                        ref="agreement"
                        style={{
                            height: "500px",
                            overflow: "auto",
                            position: "relative"
                        }}
                    >
                        <h2 style={{textAlign: "center"}}></h2>
                        <p>
                            
                        </p>
                    </div>
                );
                break;
            default:
                return (
                    <div
                        className="container"
                        ref="agreement"
                        style={{
                            height: "500px",
                            overflow: "auto",
                            position: "relative"
                        }}
                    >
                        <h2 style={{textAlign: "center"}}>Service Agreement</h2>
                        <p>
                            OBSIDIAN TECHNOLOGY CO. PTE. LTD. (hereinafter
                            referred to as the 'Company') is a company
                            incorporated under the laws in Singapore Republic,
                            GDEX (hereinafter referred to as 'GDEX' or 'the
                            Gateway') is a cryptocurrency gateway to Bitshares
                            which is operated by the company. The main access
                            point for GDEX is https://gdex.io, GDEX is a gateway
                            that provide cryptocurrency deposit and withdraw
                            service (hereinafter referred to as 'the Service')
                            to/from Bitshares. For the convenience of wording in
                            this Agreement, the Company and the Gateway are
                            referred to as 'We' or other applicable forms of
                            first person pronouns in this Agreement. All natural
                            persons or other subjects who use the Service shall
                            be users of the Gateway. For the convenience of
                            wording in this Agreement, the users are referred to
                            as 'You' or any other applicable forms of the
                            second-person pronouns. For the convenience of
                            wording in this Agreement, you and us are
                            collectively referred to as 'both parties', and
                            individually as 'one party'.
                        </p>
                        <p>Important reminder:</p>
                        <p>We hereby remind you that:</p>
                        <p>
                            1. The digital assets themselves are not offered by
                            any financial institution, corporation or the
                            Gateway;
                        </p>
                        <p>
                            2. The digital asset market is new and unconfirmed,
                            and will not necessarily expand;
                        </p>
                        <p>
                            3. Digital assets are primarily used by speculators,
                            and are used relatively less on retail and
                            commercial markets; digital asset transactions are
                            highly risky, due to the fact that they are traded
                            throughout 24-hour a day without limits on the rise
                            or fall in price, and market makers and global
                            government policies may cause major fluctuations in
                            their prices;
                        </p>
                        <p>
                            4. Digital asset transactions may be suspended or
                            prohibited at any time due to the enactment or
                            modification of national laws, regulations and
                            regulatory documents. Digital assets trading is
                            highly risky and therefore not suitable for the vast
                            majority of people. You acknowledge and understand
                            that investment in digital assets may result in
                            partial or total loss of your investment and
                            therefore you are advised to decide the amount of
                            your investment on the basis of your loss-bearing
                            capacity. You acknowledge and understand that
                            digital assets may generate derivative risks.
                            Therefore, if you have any doubt, you are advised to
                            seek assistance from a financial adviser first.
                            Furthermore, aside from the above-mentioned risks,
                            there may also be unpredictable risks. Therefore,
                            you are advised to carefully consider and use clear
                            judgment to assess your financial position and the
                            abovementioned risks before making any decisions on
                            buying and selling digital assets; any and all
                            losses arising therefrom will be borne by you and we
                            shall not be held liable in any manner whatsoever.
                        </p>
                        <p>
                            5. You understand that Bitshares is a decentralized
                            exchange based on blockchain, the basic account
                            service and the trade processing service are
                            provided by Bitshares, there are also other
                            institutions or single persons that issue assets
                            and/or provide service on Bitshares. You understand
                            that the Gateway is only used for you to
                            deposit/withdraw cryptocurrency to/from Bitshares.
                            The Gateway only undertake the due obligations for
                            the availability of own issued assets (with 'GDEX.'
                            as prefix of the name), do not undertake the due
                            obligations for the account service and the trade
                            processing service provided by Bitshares, do not
                            undertake the due obligations for availability of
                            the assets issued by other institutions or single
                            persons.{" "}
                        </p>
                        <p>
                            6. There are risk in both Internet and Bitshares,
                            include but not limit to failure for software,
                            hardware to connect to Internet, security risk for
                            Bitshares accounting system. As the availability and
                            reliability of Internet and Bitshares are not under
                            our control, we do not undertake obligations for the
                            loss caused by the risks mentioned above.
                        </p>
                        <p>
                            7.it is prohibited to use the Gateway for money
                            laundering, smuggling, bribery，if any user are
                            found relevant to these actions, the Gateway will
                            take various actions, include but not limited to
                            terminating the Service to the user, informing
                            relevant authority.
                        </p>
                    </div>
                );
        }
    }
    render() {
        let {locale} = this.props;
        let msg = this._getAgreement(locale);
        return msg;
    }
}

export default connect(GdexAgreementModal, {
    listenTo() {
        return [SettingsStore];
    },
    getProps() {
        return {
            settings: SettingsStore.getState().settings
        };
    }
});
