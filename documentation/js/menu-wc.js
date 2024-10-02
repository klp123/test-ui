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
                    <a href="index.html" data-type="index-link">ang documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-2485e07d00e78647eae834728f762fc4fda9b0f9893ccc3aec759840cf9ce06594c17e488dd3db5b291e6e18a598fec95bb42d427d68fc834f7e07cbc7c83fa7"' : 'data-bs-target="#xs-components-links-module-AppModule-2485e07d00e78647eae834728f762fc4fda9b0f9893ccc3aec759840cf9ce06594c17e488dd3db5b291e6e18a598fec95bb42d427d68fc834f7e07cbc7c83fa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2485e07d00e78647eae834728f762fc4fda9b0f9893ccc3aec759840cf9ce06594c17e488dd3db5b291e6e18a598fec95bb42d427d68fc834f7e07cbc7c83fa7"' :
                                            'id="xs-components-links-module-AppModule-2485e07d00e78647eae834728f762fc4fda9b0f9893ccc3aec759840cf9ce06594c17e488dd3db5b291e6e18a598fec95bb42d427d68fc834f7e07cbc7c83fa7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthenticationModule-de34caa1fbd13dd4285858a42c4f2ebc2d39a03c436a6d8b7e0c6c590e6d10a945c29dbfc6cbeb3c970f9595c0a931ff7a737fa853a5055be8fdacc20243381a"' : 'data-bs-target="#xs-components-links-module-AuthenticationModule-de34caa1fbd13dd4285858a42c4f2ebc2d39a03c436a6d8b7e0c6c590e6d10a945c29dbfc6cbeb3c970f9595c0a931ff7a737fa853a5055be8fdacc20243381a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-de34caa1fbd13dd4285858a42c4f2ebc2d39a03c436a6d8b7e0c6c590e6d10a945c29dbfc6cbeb3c970f9595c0a931ff7a737fa853a5055be8fdacc20243381a"' :
                                            'id="xs-components-links-module-AuthenticationModule-de34caa1fbd13dd4285858a42c4f2ebc2d39a03c436a6d8b7e0c6c590e6d10a945c29dbfc6cbeb3c970f9595c0a931ff7a737fa853a5055be8fdacc20243381a"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link" >AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-JobsModule-230bbd236642830a919cfb1bac8d5a09893c9de20a8fd61f53f74d82ce654419e2e16ed7728693a5c356e33920fd914991888b07ca670588d9ebcf873391d55f"' : 'data-bs-target="#xs-components-links-module-JobsModule-230bbd236642830a919cfb1bac8d5a09893c9de20a8fd61f53f74d82ce654419e2e16ed7728693a5c356e33920fd914991888b07ca670588d9ebcf873391d55f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JobsModule-230bbd236642830a919cfb1bac8d5a09893c9de20a8fd61f53f74d82ce654419e2e16ed7728693a5c356e33920fd914991888b07ca670588d9ebcf873391d55f"' :
                                            'id="xs-components-links-module-JobsModule-230bbd236642830a919cfb1bac8d5a09893c9de20a8fd61f53f74d82ce654419e2e16ed7728693a5c356e33920fd914991888b07ca670588d9ebcf873391d55f"' }>
                                            <li class="link">
                                                <a href="components/CreateJobComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateJobComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListJobComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListJobComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubmissionsModule.html" data-type="entity-link" >SubmissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SubmissionsModule-2f9148f8362b8c33e210dcefd7f7a3a54229e572485e0bcb38c9f86500aa8a8031a229fa68a0d2b8d90080e4096786d86cae48846c7fd9584ec59be9266311ee"' : 'data-bs-target="#xs-components-links-module-SubmissionsModule-2f9148f8362b8c33e210dcefd7f7a3a54229e572485e0bcb38c9f86500aa8a8031a229fa68a0d2b8d90080e4096786d86cae48846c7fd9584ec59be9266311ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubmissionsModule-2f9148f8362b8c33e210dcefd7f7a3a54229e572485e0bcb38c9f86500aa8a8031a229fa68a0d2b8d90080e4096786d86cae48846c7fd9584ec59be9266311ee"' :
                                            'id="xs-components-links-module-SubmissionsModule-2f9148f8362b8c33e210dcefd7f7a3a54229e572485e0bcb38c9f86500aa8a8031a229fa68a0d2b8d90080e4096786d86cae48846c7fd9584ec59be9266311ee"' }>
                                            <li class="link">
                                                <a href="components/CreateSubmissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateSubmissionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListSubmissionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListSubmissionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsersModule-8221143167663df1cc926f930536debb48b72dfa1a43230bada19b997bd492e242e467d4a3e34abdd4843ec584edb9d695d78176b8905948c445a936a32b55b2"' : 'data-bs-target="#xs-components-links-module-UsersModule-8221143167663df1cc926f930536debb48b72dfa1a43230bada19b997bd492e242e467d4a3e34abdd4843ec584edb9d695d78176b8905948c445a936a32b55b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-8221143167663df1cc926f930536debb48b72dfa1a43230bada19b997bd492e242e467d4a3e34abdd4843ec584edb9d695d78176b8905948c445a936a32b55b2"' :
                                            'id="xs-components-links-module-UsersModule-8221143167663df1cc926f930536debb48b72dfa1a43230bada19b997bd492e242e467d4a3e34abdd4843ec584edb9d695d78176b8905948c445a936a32b55b2"' }>
                                            <li class="link">
                                                <a href="components/CreateUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VendorsModule.html" data-type="entity-link" >VendorsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-VendorsModule-ddfabe83cd522a3d613554f34a48309b26f34eaaae389c953e73f1356242bb160599778bed84545ade083d422d5158a73fbd2e14c6d9f0135d556ae38045f6ee"' : 'data-bs-target="#xs-components-links-module-VendorsModule-ddfabe83cd522a3d613554f34a48309b26f34eaaae389c953e73f1356242bb160599778bed84545ade083d422d5158a73fbd2e14c6d9f0135d556ae38045f6ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VendorsModule-ddfabe83cd522a3d613554f34a48309b26f34eaaae389c953e73f1356242bb160599778bed84545ade083d422d5158a73fbd2e14c6d9f0135d556ae38045f6ee"' :
                                            'id="xs-components-links-module-VendorsModule-ddfabe83cd522a3d613554f34a48309b26f34eaaae389c953e73f1356242bb160599778bed84545ade083d422d5158a73fbd2e14c6d9f0135d556ae38045f6ee"' }>
                                            <li class="link">
                                                <a href="components/CreateVendorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateVendorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListVendorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListVendorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobService.html" data-type="entity-link" >JobService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubmissionService.html" data-type="entity-link" >SubmissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VendorService.html" data-type="entity-link" >VendorService</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});