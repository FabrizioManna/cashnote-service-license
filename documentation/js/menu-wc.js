'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cashnote-service-license documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' : 'data-target="#xs-controllers-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' :
                                            'id="xs-controllers-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' : 'data-target="#xs-injectables-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' :
                                        'id="xs-injectables-links-module-AppModule-73bcb3e65e33c58ccab5cad96a4b088b292b106a7941cc6f66d7cd105fad406d7a075814c6f48140de1d947367439a768868e5f88e316f6ac0d016314ace6097"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LicenseModule.html" data-type="entity-link" >LicenseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LicenseModule-c6e5ac9121a77444bc1c6e20f6730d7c31001746909c7ba633240e0d381e6a3bdde0da3d415d63d6a75bc308655d29971bf44b58ac68878e216f5a33f0a5c9c9"' : 'data-target="#xs-injectables-links-module-LicenseModule-c6e5ac9121a77444bc1c6e20f6730d7c31001746909c7ba633240e0d381e6a3bdde0da3d415d63d6a75bc308655d29971bf44b58ac68878e216f5a33f0a5c9c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LicenseModule-c6e5ac9121a77444bc1c6e20f6730d7c31001746909c7ba633240e0d381e6a3bdde0da3d415d63d6a75bc308655d29971bf44b58ac68878e216f5a33f0a5c9c9"' :
                                        'id="xs-injectables-links-module-LicenseModule-c6e5ac9121a77444bc1c6e20f6730d7c31001746909c7ba633240e0d381e6a3bdde0da3d415d63d6a75bc308655d29971bf44b58ac68878e216f5a33f0a5c9c9"' }>
                                        <li class="link">
                                            <a href="injectables/LicenseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LicenseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/License.html" data-type="entity-link" >License</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/License.html" data-type="entity-link" >License</a>
                            </li>
                            <li class="link">
                                <a href="classes/LicenseDeleteInput.html" data-type="entity-link" >LicenseDeleteInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LicenseInput.html" data-type="entity-link" >LicenseInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/LicenseResolver.html" data-type="entity-link" >LicenseResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/LicenseSearchInput.html" data-type="entity-link" >LicenseSearchInput</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LicenseService.html" data-type="entity-link" >LicenseService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});