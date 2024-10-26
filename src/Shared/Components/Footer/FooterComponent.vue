<script setup lang="ts">

</script>
<template>
    <footer>
        <div class="FooterPaymentMethods">
            <img src="@/assets/img/visa-classic-svgrepo-com.svg" alt="Visa" class="FooterPaymentMethods__Logo">
            <img src="@/assets/img/mastercard-svgrepo-com.svg" alt="Mastercard" class="FooterPaymentMethods__Logo">
            <img src="@/assets/img/american-express-svgrepo-com.svg" alt="American Express"
                class="FooterPaymentMethods__Logo">
            <img src="@/assets/img/skrill-svgrepo-com.svg" alt="Skrill" class="FooterPaymentMethods__Logo">
            <span class="FooterPaymentMethods__More">
                and 50+ more
            </span>
        </div>

        <div class="FooterSocialNetworks">
            <a class="FooterSocialNetworks__Facebook"></a>
            <a class="FooterSocialNetworks__Instagram"></a>
            <a class="FooterSocialNetworks__Twitter"></a>
            <a class="FooterSocialNetworks__Discord"></a>
        </div>

        <div class="FooterContent">
            <div class="FooterContent__Logo">
                <img src="@/assets/chicks-logo-large.svg" alt="Chicks Gold">
                <p>support@chicksgold.com</p>
            </div>

            <div class="FooterContent__Nav">
                <ul class="FooterContent__Nav--List">
                    <h3>Chicks Gold</h3>
                    <li>
                        <a>Games</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Sitemap</a>
                    </li>
                </ul>

                <ul class="FooterContent__Nav--List">
                    <h3>Support</h3>
                    <li>
                        <a>Contact Us</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>

                <ul class="FooterContent__Nav--List">
                    <h3>Legal</h3>
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                    <li>
                        <a>Terms of Service</a>
                    </li>
                    <li>
                        <a>Copyright Policy</a>
                    </li>
                </ul>
            </div>

            <div class="FooterContent__Reviews">
                <img src="@/assets/img/trustpilot-svgrepo-com.svg" alt="Trustpilot">
                <img src="@/assets/img/trustpilot-svgrepo-com.svg" alt="Trustpilot">
                <img src="@/assets/img/trustpilot-svgrepo-com.svg" alt="Trustpilot">
                <img src="@/assets/img/trustpilot-svgrepo-com.svg" alt="Trustpilot">
                <img src="@/assets/img/trustpilot-svgrepo-com.svg" alt="Trustpilot">
                <h3>
                    Trustpilot Reviews
                </h3>
            </div>
        </div>

        <div class="FooterCopy">
            © 2017 - 2020 Chicksgold.com. All Rights Reserved
        </div>
    </footer>
</template>
<style scoped>
footer {
    background-color: var(--primary-rgb);
    color: #ffffff;
    font-family: Arial, sans-serif;
}

.FooterPaymentMethods {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--dark-rgb-50);
}

.FooterPaymentMethods__Logo {
    height: 70px;
}

.FooterPaymentMethods__More {
    color: #9a9a9a;
    font-size: 0.9rem;
}

.FooterSocialNetworks {
    display: flex;
    gap: 0.50rem;
}

.FooterSocialNetworks>* {
    width: 40px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.FooterSocialNetworks__Facebook {
    background-image: url('../../../assets/img/social/facebook-svgrepo-com.svg');
}

.FooterSocialNetworks__Instagram {
    background-image: url('../../../assets/img/social/instagram-svgrepo-com.svg');
}

.FooterSocialNetworks__Twitter {
    background-image: url('../../../assets/img/social/twitter-svgrepo-com.svg');
}

.FooterSocialNetworks__Discord {
    background-image: url('../../../assets/img/social/discord-v2-svgrepo-com.svg');
}

.FooterContent {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.FooterContent__Logo {
    text-align: center;
}

.FooterContent__Logo>img {
    width: 150px;
    margin-bottom: 1rem;
}

.FooterContent__Nav {
    display: flex;
    justify-content: space-evenly;
    gap: 4rem;
}

.FooterContent__Nav--List ul {
    padding: 0;
    margin: 0;
}


.FooterContent__Nav--List li {
    list-style: none;
}

.FooterContent__Nav--List h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.FooterContent__Nav--List a {
    display: block;
    color: #9a9a9a;
    text-decoration: none;
    margin-bottom: 0.5rem;
}

.FooterContent__Reviews {
    display: flex;
    gap: .1rem;
    justify-content: center;
    align-items: start;
}

.FooterContent__Reviews h3 {
    font-size: .8rem;
    margin: 0 .5rem;
}

.FooterContent__Reviews>img {
    width: 1rem;
    height: 1rem;
    background-color: var(--info);
}

.FooterCopy {
    text-align: center;
    color: #9a9a9a;
    font-size: 0.9rem;
    border-top: 1px solid #3f4146;
    padding: 2rem;

}

@media (min-width: 0) {

    .FooterPaymentMethods,
    .FooterContent,
    .FooterSocialNetworks {
        padding: 1.5rem 1rem;
    }

    .FooterPaymentMethods,
    .FooterSocialNetworks {

        justify-content: center;
    }

    .FooterPaymentMethods>img {
        height: 40px;
    }


    .FooterContent {
        flex-direction: column;
        gap: 1rem;
    }

    .FooterContent__Nav {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        text-align: center;

    }
}




@media (min-width: 576px) {


    .FooterPaymentMethods,
    .FooterContent,
    .FooterSocialNetworks {
        padding: 1.5rem 1rem;
        justify-content: center;
    }


    .FooterContent {
        gap: 1rem;
        flex-direction: column;
    }

    .FooterContent__Nav {
        width: 100%;
        justify-content: space-evenly;
        flex-direction: row;

    }


}

@media (min-width: 768px) {

    .FooterPaymentMethods,
    .FooterSocialNetworks {
        justify-content: start;
    }

    .FooterContent {
        flex-direction: row;
    }

    .FooterPaymentMethods>img {
        height: 60px;
    }
}

@media (min-width: 1200px) {

    .FooterPaymentMethods,
    .FooterContent,
    .FooterSocialNetworks {
        padding: 1.5rem 10rem;

    }
}

@media (min-width: 1400px) {



    .FooterPaymentMethods,
    .FooterContent,
    .FooterSocialNetworks {
        padding: 1.5rem 17rem;

    }
}
</style>