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
        url: "https://switch-shsfds.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SHSST_SWITCH_PCI&vid=01SLCO_SHSFDS:SHSST&offset=0&query=any,contains,%s"
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
        url: "https://wisconsin-uwec.primo.exlibrisgroup.com/discovery/search?tab=default_tab&sortby=rank&vid=01UWI_EC:EC&lang=en&search_scope=MyInstitution&facet=library,include,2134%E2%13182910002134&query=any,contains,%s"
    },
    {
        title: "Search in UW-Green Bay Catalog",
        url: "https://wisconsin-uwgb.primo.exlibrisgroup.com/discovery/search?tab=default_tab&sortby=rank&vid=01UWI_GB:GB&lang=en&search_scope=MyInstitution&facet=library,include,2123%E2%13182910002123&query=any,contains,%s"
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
        url: "https://wisconsin-uwosh.primo.exlibrisgroup.com/discovery/search?tab=default_tab&sortby=rank&vid=01UWI_OSH:OSH&lang=en&search_scope=MyInstitution&facet=library,include,2126%E2%13181920002126&query=any,contains,%s"
    },
    {
        title: "Search in UW-Parkside Catalog",
        url: "https://wisconsin-uwp.primo.exlibrisgroup.com/discovery/search?tab=default_tab&sortby=rank&vid=01UWI_PL:PARK&lang=en&search_scope=MyInstitution&facet=library,include,2127%E2%13182810002127&query=any,contains,%s"
    },
    {
        title: "Search in UW-Platteville Catalog",
        url: "https://wisconsin-uwplatt.primo.exlibrisgroup.com/discovery/search?tab=default_tab&search_scope=DN_and_CI&vid=01UWI_PLT:PLATT&facet=library,include,2128%E2%80%9313182920002128&offset=0&query=any,contains,%s"
    },
    {
        // BUGFIX: was pointing at the Parkside URL - now correctly targets UW-River Falls
        title: "Search in UW-River Falls Catalog",
        url: "https://wisconsin-uwrf.primo.exlibrisgroup.com/discovery/search?tab=default_tab&sortby=rank&vid=01UWI_RF:RF&lang=en&search_scope=MyInstitution&facet=library,include,2129%E2%80%9313148980002129&query=any,contains,%s"
    },
    {
        title: "Search in UW-Stevens Point Catalog",
        url: "https://wisconsin-uwsp.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=DN_and_CI&vid=01UWI_SF:SP&facet=library,include,2130%E2%80%9313182010002130&lang=en&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in UW-Stout Catalog",
        url: "https://wisconsin-uwstout.primo.exlibrisgroup.com/discovery/search?tab=default_tab&search_scope=DN_and_CI&vid=01UWI_ST:STOUT&facet=library,include,2131%E2%80%9313181880002131&lang=en&offset=0&query=any,contains,%s"
    },
    {
        title: "Search in UW-Superior Catalog",
        url: "https://wisconsin-uwsuper.primo.exlibrisgroup.com/discovery/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_SUP:SUPER&facet=library,include,2132%E2%80%93212272930002132&lang=en_US&query=any,contains,%s"
    },
    {
        title: "Search in UW-Whitewater Catalog",
        url: "https://wisconsin-uww.primo.exlibrisgroup.com/discovery/search?tab=default_tab&sortby=rank&vid=01UWI_WW:WW&lang=en&search_scope=MyInstitution&facet=library,include,2133%E2%13181030002133&query=any,contains,%s"
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
        url: "https://sacredheartschooloftheol.share.worldcat.org/wms/cmnd/nd/discover/items/search?ai0id=level3&ai0type=scope&offset=1&pageSize=10&si0in=kw%3A&si0qs=%s"
    },
];

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
        url: searchObj.url.replace("%s", encodeURIComponent(info.selectionText)),
        selected: false
    });
});

// !SECTION
