
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AtomsAvatar': typeof import("../components/atoms/Avatar.vue")['default']
    'AtomsBadge': typeof import("../components/atoms/Badge.vue")['default']
    'AtomsButton': typeof import("../components/atoms/Button.vue")['default']
    'AtomsCheckbox': typeof import("../components/atoms/Checkbox.vue")['default']
    'AtomsField': typeof import("../components/atoms/Field.vue")['default']
    'AtomsForm': typeof import("../components/atoms/Form.vue")['default']
    'AtomsImage': typeof import("../components/atoms/Image.vue")['default']
    'AtomsInput': typeof import("../components/atoms/Input.vue")['default']
    'AtomsLoader': typeof import("../components/atoms/Loader.vue")['default']
    'AtomsLogo': typeof import("../components/atoms/Logo.vue")['default']
    'AtomsNavLink': typeof import("../components/atoms/NavLink.vue")['default']
    'AtomsPlaceholder': typeof import("../components/atoms/Placeholder.vue")['default']
    'AtomsSelect': typeof import("../components/atoms/Select.vue")['default']
    'AtomsSkeleton': typeof import("../components/atoms/Skeleton.vue")['default']
    'AtomsSwitch': typeof import("../components/atoms/Switch.vue")['default']
    'AtomsFieldContext': typeof import("../components/atoms/fieldContext")['default']
    'AtomsFormContext': typeof import("../components/atoms/formContext")['default']
    'Atoms': typeof import("../components/atoms/index")['default']
    'AtomsVariants': typeof import("../components/atoms/variants")['default']
    'MoleculesButtonWithIcon': typeof import("../components/molecules/ButtonWithIcon.vue")['default']
    'MoleculesCard': typeof import("../components/molecules/Card.vue")['default']
    'MoleculesCarousel': typeof import("../components/molecules/Carousel.vue")['default']
    'MoleculesCountrySelector': typeof import("../components/molecules/CountrySelector.vue")['default']
    'MoleculesDragDropUpload': typeof import("../components/molecules/DragDropUpload.vue")['default']
    'MoleculesLabelCheckbox': typeof import("../components/molecules/LabelCheckbox.vue")['default']
    'MoleculesLabelInput': typeof import("../components/molecules/LabelInput.vue")['default']
    'MoleculesLabelSelect': typeof import("../components/molecules/LabelSelect.vue")['default']
    'MoleculesNavActions': typeof import("../components/molecules/NavActions.vue")['default']
    'MoleculesNavPrimary': typeof import("../components/molecules/NavPrimary.vue")['default']
    'MoleculesSearchBar': typeof import("../components/molecules/SearchBar.vue")['default']
    'MoleculesTabs': typeof import("../components/molecules/Tabs.vue")['default']
    'MoleculesTagInput': typeof import("../components/molecules/TagInput.vue")['default']
    'MoleculesTextIcon': typeof import("../components/molecules/TextIcon.vue")['default']
    'Molecules': typeof import("../components/molecules/index")['default']
    'OrganismsCockpitShowcase': typeof import("../components/organisms/CockpitShowcase.vue")['default']
    'OrganismsHerosection': typeof import("../components/organisms/Herosection.vue")['default']
    'OrganismsLeftFeatureCta': typeof import("../components/organisms/LeftFeatureCta.vue")['default']
    'OrganismsNavbar': typeof import("../components/organisms/Navbar.vue")['default']
    'OrganismsSecondpart': typeof import("../components/organisms/Secondpart.vue")['default']
    'OrganismsSeoHero': typeof import("../components/organisms/SeoHero.vue")['default']
    'OrganismsSeoSecond': typeof import("../components/organisms/SeoSecond.vue")['default']
    'OrganismsServicesSlider': typeof import("../components/organisms/ServicesSlider.vue")['default']
    'OrganismsServicesfourth': typeof import("../components/organisms/Servicesfourth.vue")['default']
    'OrganismsServiceshero': typeof import("../components/organisms/Serviceshero.vue")['default']
    'OrganismsServicessecond': typeof import("../components/organisms/Servicessecond.vue")['default']
    'OrganismsSiteFooter': typeof import("../components/organisms/SiteFooter.vue")['default']
    'OrganismsThirdpart': typeof import("../components/organisms/Thirdpart.vue")['default']
    'Organisms': typeof import("../components/organisms/index")['default']
    'OrganismsLandingLFooter': typeof import("../components/organisms/landing/LFooter.vue")['default']
    'OrganismsLandingLHeader': typeof import("../components/organisms/landing/LHeader.vue")['default']
    'OrganismsServicesfifth': typeof import("../components/organisms/servicesfifth.vue")['default']
    'OrganismsServicesthird': typeof import("../components/organisms/servicesthird.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAtomsAvatar': LazyComponent<typeof import("../components/atoms/Avatar.vue")['default']>
    'LazyAtomsBadge': LazyComponent<typeof import("../components/atoms/Badge.vue")['default']>
    'LazyAtomsButton': LazyComponent<typeof import("../components/atoms/Button.vue")['default']>
    'LazyAtomsCheckbox': LazyComponent<typeof import("../components/atoms/Checkbox.vue")['default']>
    'LazyAtomsField': LazyComponent<typeof import("../components/atoms/Field.vue")['default']>
    'LazyAtomsForm': LazyComponent<typeof import("../components/atoms/Form.vue")['default']>
    'LazyAtomsImage': LazyComponent<typeof import("../components/atoms/Image.vue")['default']>
    'LazyAtomsInput': LazyComponent<typeof import("../components/atoms/Input.vue")['default']>
    'LazyAtomsLoader': LazyComponent<typeof import("../components/atoms/Loader.vue")['default']>
    'LazyAtomsLogo': LazyComponent<typeof import("../components/atoms/Logo.vue")['default']>
    'LazyAtomsNavLink': LazyComponent<typeof import("../components/atoms/NavLink.vue")['default']>
    'LazyAtomsPlaceholder': LazyComponent<typeof import("../components/atoms/Placeholder.vue")['default']>
    'LazyAtomsSelect': LazyComponent<typeof import("../components/atoms/Select.vue")['default']>
    'LazyAtomsSkeleton': LazyComponent<typeof import("../components/atoms/Skeleton.vue")['default']>
    'LazyAtomsSwitch': LazyComponent<typeof import("../components/atoms/Switch.vue")['default']>
    'LazyAtomsFieldContext': LazyComponent<typeof import("../components/atoms/fieldContext")['default']>
    'LazyAtomsFormContext': LazyComponent<typeof import("../components/atoms/formContext")['default']>
    'LazyAtoms': LazyComponent<typeof import("../components/atoms/index")['default']>
    'LazyAtomsVariants': LazyComponent<typeof import("../components/atoms/variants")['default']>
    'LazyMoleculesButtonWithIcon': LazyComponent<typeof import("../components/molecules/ButtonWithIcon.vue")['default']>
    'LazyMoleculesCard': LazyComponent<typeof import("../components/molecules/Card.vue")['default']>
    'LazyMoleculesCarousel': LazyComponent<typeof import("../components/molecules/Carousel.vue")['default']>
    'LazyMoleculesCountrySelector': LazyComponent<typeof import("../components/molecules/CountrySelector.vue")['default']>
    'LazyMoleculesDragDropUpload': LazyComponent<typeof import("../components/molecules/DragDropUpload.vue")['default']>
    'LazyMoleculesLabelCheckbox': LazyComponent<typeof import("../components/molecules/LabelCheckbox.vue")['default']>
    'LazyMoleculesLabelInput': LazyComponent<typeof import("../components/molecules/LabelInput.vue")['default']>
    'LazyMoleculesLabelSelect': LazyComponent<typeof import("../components/molecules/LabelSelect.vue")['default']>
    'LazyMoleculesNavActions': LazyComponent<typeof import("../components/molecules/NavActions.vue")['default']>
    'LazyMoleculesNavPrimary': LazyComponent<typeof import("../components/molecules/NavPrimary.vue")['default']>
    'LazyMoleculesSearchBar': LazyComponent<typeof import("../components/molecules/SearchBar.vue")['default']>
    'LazyMoleculesTabs': LazyComponent<typeof import("../components/molecules/Tabs.vue")['default']>
    'LazyMoleculesTagInput': LazyComponent<typeof import("../components/molecules/TagInput.vue")['default']>
    'LazyMoleculesTextIcon': LazyComponent<typeof import("../components/molecules/TextIcon.vue")['default']>
    'LazyMolecules': LazyComponent<typeof import("../components/molecules/index")['default']>
    'LazyOrganismsCockpitShowcase': LazyComponent<typeof import("../components/organisms/CockpitShowcase.vue")['default']>
    'LazyOrganismsHerosection': LazyComponent<typeof import("../components/organisms/Herosection.vue")['default']>
    'LazyOrganismsLeftFeatureCta': LazyComponent<typeof import("../components/organisms/LeftFeatureCta.vue")['default']>
    'LazyOrganismsNavbar': LazyComponent<typeof import("../components/organisms/Navbar.vue")['default']>
    'LazyOrganismsSecondpart': LazyComponent<typeof import("../components/organisms/Secondpart.vue")['default']>
    'LazyOrganismsSeoHero': LazyComponent<typeof import("../components/organisms/SeoHero.vue")['default']>
    'LazyOrganismsSeoSecond': LazyComponent<typeof import("../components/organisms/SeoSecond.vue")['default']>
    'LazyOrganismsServicesSlider': LazyComponent<typeof import("../components/organisms/ServicesSlider.vue")['default']>
    'LazyOrganismsServicesfourth': LazyComponent<typeof import("../components/organisms/Servicesfourth.vue")['default']>
    'LazyOrganismsServiceshero': LazyComponent<typeof import("../components/organisms/Serviceshero.vue")['default']>
    'LazyOrganismsServicessecond': LazyComponent<typeof import("../components/organisms/Servicessecond.vue")['default']>
    'LazyOrganismsSiteFooter': LazyComponent<typeof import("../components/organisms/SiteFooter.vue")['default']>
    'LazyOrganismsThirdpart': LazyComponent<typeof import("../components/organisms/Thirdpart.vue")['default']>
    'LazyOrganisms': LazyComponent<typeof import("../components/organisms/index")['default']>
    'LazyOrganismsLandingLFooter': LazyComponent<typeof import("../components/organisms/landing/LFooter.vue")['default']>
    'LazyOrganismsLandingLHeader': LazyComponent<typeof import("../components/organisms/landing/LHeader.vue")['default']>
    'LazyOrganismsServicesfifth': LazyComponent<typeof import("../components/organisms/servicesfifth.vue")['default']>
    'LazyOrganismsServicesthird': LazyComponent<typeof import("../components/organisms/servicesthird.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AtomsAvatar: typeof import("../components/atoms/Avatar.vue")['default']
export const AtomsBadge: typeof import("../components/atoms/Badge.vue")['default']
export const AtomsButton: typeof import("../components/atoms/Button.vue")['default']
export const AtomsCheckbox: typeof import("../components/atoms/Checkbox.vue")['default']
export const AtomsField: typeof import("../components/atoms/Field.vue")['default']
export const AtomsForm: typeof import("../components/atoms/Form.vue")['default']
export const AtomsImage: typeof import("../components/atoms/Image.vue")['default']
export const AtomsInput: typeof import("../components/atoms/Input.vue")['default']
export const AtomsLoader: typeof import("../components/atoms/Loader.vue")['default']
export const AtomsLogo: typeof import("../components/atoms/Logo.vue")['default']
export const AtomsNavLink: typeof import("../components/atoms/NavLink.vue")['default']
export const AtomsPlaceholder: typeof import("../components/atoms/Placeholder.vue")['default']
export const AtomsSelect: typeof import("../components/atoms/Select.vue")['default']
export const AtomsSkeleton: typeof import("../components/atoms/Skeleton.vue")['default']
export const AtomsSwitch: typeof import("../components/atoms/Switch.vue")['default']
export const AtomsFieldContext: typeof import("../components/atoms/fieldContext")['default']
export const AtomsFormContext: typeof import("../components/atoms/formContext")['default']
export const Atoms: typeof import("../components/atoms/index")['default']
export const AtomsVariants: typeof import("../components/atoms/variants")['default']
export const MoleculesButtonWithIcon: typeof import("../components/molecules/ButtonWithIcon.vue")['default']
export const MoleculesCard: typeof import("../components/molecules/Card.vue")['default']
export const MoleculesCarousel: typeof import("../components/molecules/Carousel.vue")['default']
export const MoleculesCountrySelector: typeof import("../components/molecules/CountrySelector.vue")['default']
export const MoleculesDragDropUpload: typeof import("../components/molecules/DragDropUpload.vue")['default']
export const MoleculesLabelCheckbox: typeof import("../components/molecules/LabelCheckbox.vue")['default']
export const MoleculesLabelInput: typeof import("../components/molecules/LabelInput.vue")['default']
export const MoleculesLabelSelect: typeof import("../components/molecules/LabelSelect.vue")['default']
export const MoleculesNavActions: typeof import("../components/molecules/NavActions.vue")['default']
export const MoleculesNavPrimary: typeof import("../components/molecules/NavPrimary.vue")['default']
export const MoleculesSearchBar: typeof import("../components/molecules/SearchBar.vue")['default']
export const MoleculesTabs: typeof import("../components/molecules/Tabs.vue")['default']
export const MoleculesTagInput: typeof import("../components/molecules/TagInput.vue")['default']
export const MoleculesTextIcon: typeof import("../components/molecules/TextIcon.vue")['default']
export const Molecules: typeof import("../components/molecules/index")['default']
export const OrganismsCockpitShowcase: typeof import("../components/organisms/CockpitShowcase.vue")['default']
export const OrganismsHerosection: typeof import("../components/organisms/Herosection.vue")['default']
export const OrganismsLeftFeatureCta: typeof import("../components/organisms/LeftFeatureCta.vue")['default']
export const OrganismsNavbar: typeof import("../components/organisms/Navbar.vue")['default']
export const OrganismsSecondpart: typeof import("../components/organisms/Secondpart.vue")['default']
export const OrganismsSeoHero: typeof import("../components/organisms/SeoHero.vue")['default']
export const OrganismsSeoSecond: typeof import("../components/organisms/SeoSecond.vue")['default']
export const OrganismsServicesSlider: typeof import("../components/organisms/ServicesSlider.vue")['default']
export const OrganismsServicesfourth: typeof import("../components/organisms/Servicesfourth.vue")['default']
export const OrganismsServiceshero: typeof import("../components/organisms/Serviceshero.vue")['default']
export const OrganismsServicessecond: typeof import("../components/organisms/Servicessecond.vue")['default']
export const OrganismsSiteFooter: typeof import("../components/organisms/SiteFooter.vue")['default']
export const OrganismsThirdpart: typeof import("../components/organisms/Thirdpart.vue")['default']
export const Organisms: typeof import("../components/organisms/index")['default']
export const OrganismsLandingLFooter: typeof import("../components/organisms/landing/LFooter.vue")['default']
export const OrganismsLandingLHeader: typeof import("../components/organisms/landing/LHeader.vue")['default']
export const OrganismsServicesfifth: typeof import("../components/organisms/servicesfifth.vue")['default']
export const OrganismsServicesthird: typeof import("../components/organisms/servicesthird.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAtomsAvatar: LazyComponent<typeof import("../components/atoms/Avatar.vue")['default']>
export const LazyAtomsBadge: LazyComponent<typeof import("../components/atoms/Badge.vue")['default']>
export const LazyAtomsButton: LazyComponent<typeof import("../components/atoms/Button.vue")['default']>
export const LazyAtomsCheckbox: LazyComponent<typeof import("../components/atoms/Checkbox.vue")['default']>
export const LazyAtomsField: LazyComponent<typeof import("../components/atoms/Field.vue")['default']>
export const LazyAtomsForm: LazyComponent<typeof import("../components/atoms/Form.vue")['default']>
export const LazyAtomsImage: LazyComponent<typeof import("../components/atoms/Image.vue")['default']>
export const LazyAtomsInput: LazyComponent<typeof import("../components/atoms/Input.vue")['default']>
export const LazyAtomsLoader: LazyComponent<typeof import("../components/atoms/Loader.vue")['default']>
export const LazyAtomsLogo: LazyComponent<typeof import("../components/atoms/Logo.vue")['default']>
export const LazyAtomsNavLink: LazyComponent<typeof import("../components/atoms/NavLink.vue")['default']>
export const LazyAtomsPlaceholder: LazyComponent<typeof import("../components/atoms/Placeholder.vue")['default']>
export const LazyAtomsSelect: LazyComponent<typeof import("../components/atoms/Select.vue")['default']>
export const LazyAtomsSkeleton: LazyComponent<typeof import("../components/atoms/Skeleton.vue")['default']>
export const LazyAtomsSwitch: LazyComponent<typeof import("../components/atoms/Switch.vue")['default']>
export const LazyAtomsFieldContext: LazyComponent<typeof import("../components/atoms/fieldContext")['default']>
export const LazyAtomsFormContext: LazyComponent<typeof import("../components/atoms/formContext")['default']>
export const LazyAtoms: LazyComponent<typeof import("../components/atoms/index")['default']>
export const LazyAtomsVariants: LazyComponent<typeof import("../components/atoms/variants")['default']>
export const LazyMoleculesButtonWithIcon: LazyComponent<typeof import("../components/molecules/ButtonWithIcon.vue")['default']>
export const LazyMoleculesCard: LazyComponent<typeof import("../components/molecules/Card.vue")['default']>
export const LazyMoleculesCarousel: LazyComponent<typeof import("../components/molecules/Carousel.vue")['default']>
export const LazyMoleculesCountrySelector: LazyComponent<typeof import("../components/molecules/CountrySelector.vue")['default']>
export const LazyMoleculesDragDropUpload: LazyComponent<typeof import("../components/molecules/DragDropUpload.vue")['default']>
export const LazyMoleculesLabelCheckbox: LazyComponent<typeof import("../components/molecules/LabelCheckbox.vue")['default']>
export const LazyMoleculesLabelInput: LazyComponent<typeof import("../components/molecules/LabelInput.vue")['default']>
export const LazyMoleculesLabelSelect: LazyComponent<typeof import("../components/molecules/LabelSelect.vue")['default']>
export const LazyMoleculesNavActions: LazyComponent<typeof import("../components/molecules/NavActions.vue")['default']>
export const LazyMoleculesNavPrimary: LazyComponent<typeof import("../components/molecules/NavPrimary.vue")['default']>
export const LazyMoleculesSearchBar: LazyComponent<typeof import("../components/molecules/SearchBar.vue")['default']>
export const LazyMoleculesTabs: LazyComponent<typeof import("../components/molecules/Tabs.vue")['default']>
export const LazyMoleculesTagInput: LazyComponent<typeof import("../components/molecules/TagInput.vue")['default']>
export const LazyMoleculesTextIcon: LazyComponent<typeof import("../components/molecules/TextIcon.vue")['default']>
export const LazyMolecules: LazyComponent<typeof import("../components/molecules/index")['default']>
export const LazyOrganismsCockpitShowcase: LazyComponent<typeof import("../components/organisms/CockpitShowcase.vue")['default']>
export const LazyOrganismsHerosection: LazyComponent<typeof import("../components/organisms/Herosection.vue")['default']>
export const LazyOrganismsLeftFeatureCta: LazyComponent<typeof import("../components/organisms/LeftFeatureCta.vue")['default']>
export const LazyOrganismsNavbar: LazyComponent<typeof import("../components/organisms/Navbar.vue")['default']>
export const LazyOrganismsSecondpart: LazyComponent<typeof import("../components/organisms/Secondpart.vue")['default']>
export const LazyOrganismsSeoHero: LazyComponent<typeof import("../components/organisms/SeoHero.vue")['default']>
export const LazyOrganismsSeoSecond: LazyComponent<typeof import("../components/organisms/SeoSecond.vue")['default']>
export const LazyOrganismsServicesSlider: LazyComponent<typeof import("../components/organisms/ServicesSlider.vue")['default']>
export const LazyOrganismsServicesfourth: LazyComponent<typeof import("../components/organisms/Servicesfourth.vue")['default']>
export const LazyOrganismsServiceshero: LazyComponent<typeof import("../components/organisms/Serviceshero.vue")['default']>
export const LazyOrganismsServicessecond: LazyComponent<typeof import("../components/organisms/Servicessecond.vue")['default']>
export const LazyOrganismsSiteFooter: LazyComponent<typeof import("../components/organisms/SiteFooter.vue")['default']>
export const LazyOrganismsThirdpart: LazyComponent<typeof import("../components/organisms/Thirdpart.vue")['default']>
export const LazyOrganisms: LazyComponent<typeof import("../components/organisms/index")['default']>
export const LazyOrganismsLandingLFooter: LazyComponent<typeof import("../components/organisms/landing/LFooter.vue")['default']>
export const LazyOrganismsLandingLHeader: LazyComponent<typeof import("../components/organisms/landing/LHeader.vue")['default']>
export const LazyOrganismsServicesfifth: LazyComponent<typeof import("../components/organisms/servicesfifth.vue")['default']>
export const LazyOrganismsServicesthird: LazyComponent<typeof import("../components/organisms/servicesthird.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
