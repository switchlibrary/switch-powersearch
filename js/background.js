// SECTION Context Menu

const searches = [
    {
        title: "Search in the Alverno Catalog",
        url: "https://switch-am.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=AC_SWITCH_PCI&vid=01SLCO_AM:Alverno&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in the Concordia Library Catalog",
        url: "https://switch-cuw.primo.exlibrisgroup.com/discovery/search?tab=DN_CI_EBSCO&search_scope=DN_and_CI&vid=01SLCO_CUW:CUW&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in the MIAD Library Catalog",
        url: "https://switch-am.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=MIAD_SWITCH_PCI&vid=01SLCO_AM:MIAD&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in Mount Mary Library Catalog",
        url: "https://switch-mmwlc.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SWITCH_MMU_PCI&vid=01SLCO_MMWLC:MMU&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in the Sacred Heart Library Catalog",
        url: "https://switch-shsfds.primo.exlibrisgroup.com/discovery/search?tab=ALL&search_scope=SHSST_SWITCH_PCI&vid=01SLCO_SHSFDS:SHSST&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in the Saint Francis Library Catalog",
        url: "https://switch-shsfds.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SFS_SWITCH_PCI&vid=01SLCO_SHSFDS:SFS&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in the Wisconsin Lutheran College Catalog",
        url: "https://switch-mmwlc.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SWITCH_WLC_PCI&vid=01SLCO_MMWLC:WLC&offset=0&query=any,contains,%s"
    },
        {
        title: "Search in the Marquette Catalog",
        url: "https://marquette.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=MyInst_and_CI&vid=01MARQUETTE_INST:MARQUETTE&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in UW-Eau Claire Catalog",
        url: "https://wisconsin-uwec.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&mfacet=library,include,2134%E2%80%9313182910002134&vid=01UWI_EC:ECNDE&lang=en&query=any,contains,%s"
    },
    {
        title: "Search in UW-Green Bay Catalog",
        url: "https://wisconsin-uwgb.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_GB:GBNDE&lang=en&search_scope=MyInstitution&facet=library,include,2123%E2%80%9313182910002123&query=any,contains,%s"
    },
    {
        title: "Search UW-Madison Articles",
        url: "https://search.library.wisc.edu/search/articles?q=%s"
    },
    {
        title: "Search UW-Madison Books/Video",
        url: "https://search.library.wisc.edu/search/system?q=%s"
    },
    {
        title: "Search in UW-Oshkosh Catalog",
        url: "https://wisconsin-uwosh.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_OSH:OSHNDE&lang=en&search_scope=MyInstitution&facet=library,include,2126%E2%80%9313181920002126&query=any,contains,%s"
    },
    {
        title: "Search in UW-Parkside Catalog",
        url: "https://wisconsin-uwp.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_PL:PARKNDE&lang=en&search_scope=MyInstitution&facet=library,include,2127%E2%80%9313182810002127&query=any,contains,%s"
    },
    {
        title: "Search in UW-Platteville Catalog",
        url: "https://wisconsin-uwplatt.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_PLT:PLATTNDE&facet=library,include,2128%E2%80%9313182920002128&query=any,contains,%s"
    },
    {
        title: "Search in UW-River Falls Catalog",
        url: "https://wisconsin-uwrf.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_RF:RFNDE&lang=en&search_scope=MyInstitution&facet=library,include,2129%E2%80%9313148980002129&query=any,contains,%s"
    },
    {
        title: "Search in UW-Stevens Point Catalog",
        url: "https://wisconsin-uwsp.primo.exlibrisgroup.com/nde/search?tab=default&search_scope=MyInstitution&vid=01UWI_SF:SPNDE&facet=library,include,2130%E2%80%9313182010002130&lang=en&query=any,contains,%s"
    },
    {
        title: "Search in UW-Stout Catalog",
        url: "https://wisconsin-uwstout.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_ST:STOUTNDE&facet=library,include,2131%E2%80%9313181880002131&query=any,contains,%s"
    },
    {
        title: "Search in UW-Superior Catalog",
        url: "https://wisconsin-uwsuper.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_SUP:SUPERNDE&facet=library,include,2132%E2%80%93212272930002132&query=any,contains,%s"
    },
    {
        title: "Search in UW-Whitewater Catalog",
        url: "https://wisconsin-uww.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_WW:WWNDE&lang=en&search_scope=MyInstitution&facet=library,include,2133%E2%80%9313181030002133&query=any,contains,%s"
    },
    {
        title: "Search in Google Scholar",
        url: "https://scholar.google.com/scholar?q=%s"
    },
        {
        title: "Search in WorldCat",
        url: "https://search.worldcat.org/search?q=%s"
    },
        {
        title: "Search in WorldShare WMS SHSST",
        // %j = search term goes inside a JSON value (JSON-escaped, then URL-encoded)
        url: "https://sacredheartschooloftheol.share.worldcat.org/wms/cmnd/nd/discovery/bib?searchItems=%5B%7B%22index%22%3A%22kw%3A%22%2C%22queryString%22%3A%22%j%22%2C%22operator%22%3A%22AND%22%7D%5D&scopeLevel=level3&offset=1&sort=librarycount_d&requestType=search&searchType=advancedSearch"
    },
];

// Fill a search URL template with the search text.
//   %j -> text is placed inside a JSON string, so it is JSON-escaped first
//   %s -> text is URL-encoded
function fillSearchUrl(template, text) {
    if (template.includes("%j")) {
        const jsonSafe = JSON.stringify(text).slice(1, -1);
        return template.replace("%j", () => encodeURIComponent(jsonSafe));
    }
    return template.replace("%s", () => encodeURIComponent(text));
}

searches.forEach(function (obj, index) {
    chrome.contextMenus.create({
        title: obj.title,
        contexts: ["selection"],
        id: (index + 1).toString()
    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    const searchObj = searches[info.menuItemId - 1];
    if (!searchObj) return;
    chrome.tabs.create({
        url: fillSearchUrl(searchObj.url, info.selectionText),
        selected: false
    });
});

// !SECTION
