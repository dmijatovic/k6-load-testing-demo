import {group} from 'k6';
import {validatePageTitle} from './validatePageTitle.js'


export function rsdPageTitlesCheck () {
  // home page
  group('Homepage', () => {
    validatePageTitle({
      url: "https://research-software.dev/",
      title: "Research Software Directory",
      waitFor: 1
    })
  })

  // software overview
  group('Software overview', () => {
    // first page with 12 items
    validatePageTitle({
      url: "https://research-software.dev/software?&page=0&rows=12",
      title: "Software | Research Software Directory",
      waitFor: 1
    })
    // second page with 24 items
    validatePageTitle({
      url: "https://research-software.dev/software?&page=1&rows=24",
      title: "Software | Research Software Directory",
      waitFor: 1
    })
  })

  // projects overview
  group('Projects overview', () => {
    // first page
    validatePageTitle({
      url: "https://research-software.dev/projects?page=0&rows=12",
      title: "Projects | RSD",
      waitFor: 1
    })
    // second page with 24 items
    validatePageTitle({
      url: "https://research-software.dev/projects?page=1&rows=24",
      title: "Projects | RSD",
      waitFor: 1
    })
  })

  // organisations overview
  group('Organisations overview', () => {
    // first page with 12
    validatePageTitle({
      url: "https://research-software.dev/organisations?&page=0&rows=12",
      title: "Organisations | Research Software Directory",
      waitFor: 1
    })
    // second page with 24
    validatePageTitle({
      url: "https://research-software.dev/organisations?&page=1&rows=24",
      title: "Organisations | Research Software Directory",
      waitFor: 1
    })
  })

  // software items
  group('Software items', () => {
    validatePageTitle({
      url: "https://research-software.dev/software/ggir",
      title: "GGIR | Research Software Directory",
      waitFor: 1
    })
    validatePageTitle({
      url: "https://research-software.dev/software/esmvaltool",
      title: "ESMValTool | Research Software Directory",
      waitFor: 1
    })
  })

  // project items
  group('Project items', () => {
    validatePageTitle({
      url: "https://research-software.dev/projects/3d-e-chem",
      title: "3D-e-Chem | Research Software Directory",
      waitFor: 1
    })
    validatePageTitle({
      url: "https://research-software.dev/projects/aa-alert",
      title: "AA-ALERT | Research Software Directory",
      waitFor: 1
    })
  })

  // organisation items
  group('Organisation items', () => {
    validatePageTitle({
      url: "https://research-software.dev/organisations/netherlands-escience-center",
      title: "Netherlands eScience Center | RSD",
      waitFor: 1
    })
    validatePageTitle({
      url: "https://research-software.dev/organisations/university-of-amsterdam",
      title: "University of Amsterdam | RSD",
      waitFor: 1
    })
  })
}