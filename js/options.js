// All library checkbox IDs - single source of truth
const LIBRARY_IDS = [
    'alverno', 'concordia', 'miad', 'mountmary', 'sacredheart',
    'saintfrancis', 'wlc', 'mrq', 'eau', 'gb', 'mad', 'madb',
    'osh', 'ps', 'pl', 'rf', 'sp', 'st', 'su', 'ww', 'scholar', 'wc', 'wcshsst'
];

// Search URLs keyed by checkbox ID
const SEARCH_URLS = {
    concordia:   'https://switch-cuw.primo.exlibrisgroup.com/discovery/search?tab=DN_CI_EBSCO&search_scope=DN_and_CI&vid=01SLCO_CUW:CUW&offset=0&query=any,contains,',
    alverno:     'https://switch-am.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=AC_SWITCH_PCI&vid=01SLCO_AM:Alverno&offset=0&query=any,contains,',
    miad:        'https://switch-am.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=MIAD_SWITCH_PCI&vid=01SLCO_AM:MIAD&offset=0&query=any,contains,',
    mountmary:   'https://switch-mmwlc.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SWITCH_MMU_PCI&vid=01SLCO_MMWLC:MMU&offset=0&query=any,contains,',
    sacredheart: 'https://switch-shsfds.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SHSST_SWITCH_PCI&vid=01SLCO_SHSFDS:SHSST&offset=0&query=any,contains,',
    saintfrancis:'https://switch-shsfds.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SFS_SWITCH_PCI&vid=01SLCO_SHSFDS:SFS&offset=0&query=any,contains,',
    wlc:         'https://switch-mmwlc.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=SWITCH_WLC_PCI&vid=01SLCO_MMWLC:WLC&offset=0&query=any,contains,',
    mrq:         'https://marquette.primo.exlibrisgroup.com/discovery/search?tab=Everything&search_scope=MyInst_and_CI&vid=01MARQUETTE_INST:MARQUETTE&offset=0&query=any,contains,',
    eau:         'https://wisconsin-uwec.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&mfacet=library,include,2134%E2%80%9313182910002134&vid=01UWI_EC:ECNDE&lang=en&query=any,contains,',
    gb:          'https://wisconsin-uwgb.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_GB:GBNDE&lang=en&search_scope=MyInstitution&facet=library,include,2123%E2%80%9313182910002123&query=any,contains,',
    mad:         'https://search.library.wisc.edu/search/articles?q=',
    madb:        'https://search.library.wisc.edu/search/system?q=',
    osh:         'https://wisconsin-uwosh.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_OSH:OSHNDE&lang=en&search_scope=MyInstitution&facet=library,include,2126%E2%80%9313181920002126&query=any,contains,',
    ps:          'https://wisconsin-uwp.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_PL:PARKNDE&lang=en&search_scope=MyInstitution&facet=library,include,2127%E2%80%9313182810002127&query=any,contains,',
    pl:          'https://wisconsin-uwplatt.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_PLT:PLATTNDE&facet=library,include,2128%E2%80%9313182920002128&query=any,contains,',
    rf:          'https://wisconsin-uwrf.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_RF:RFNDE&lang=en&search_scope=MyInstitution&facet=library,include,2129%E2%80%9313148980002129&query=any,contains,',
    sp:          'https://wisconsin-uwsp.primo.exlibrisgroup.com/nde/search?tab=default&search_scope=MyInstitution&vid=01UWI_SF:SPNDE&facet=library,include,2130%E2%80%9313182010002130&lang=en&query=any,contains,',
    st:          'https://wisconsin-uwstout.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_ST:STOUTNDE&facet=library,include,2131%E2%80%9313181880002131&query=any,contains,',
    su:          'https://wisconsin-uwsuper.primo.exlibrisgroup.com/nde/search?tab=default_tab&search_scope=MyInstitution&vid=01UWI_SUP:SUPERNDE&facet=library,include,2132%E2%80%93212272930002132&query=any,contains,',
    ww:          'https://wisconsin-uww.primo.exlibrisgroup.com/nde/search?tab=default_tab&sortby=rank&vid=01UWI_WW:WWNDE&lang=en&search_scope=MyInstitution&facet=library,include,2133%E2%80%9313181030002133&query=any,contains,',
    scholar:     'https://scholar.google.com/scholar?q=',
    wc:          'https://search.worldcat.org/search?q=',
    wcshsst:     'https://sacredheartschooloftheol.share.worldcat.org/wms/cmnd/nd/discover/items/search?ai0id=level3&ai0type=scope&offset=1&pageSize=10&si0in=kw%3A&si0qs=',
};

document.addEventListener('DOMContentLoaded', function () {

    // --- Restore saved checkbox states ---
    // Fetch all keys at once rather than 20 individual calls
    chrome.storage.sync.get(LIBRARY_IDS, function (storage) {
        LIBRARY_IDS.forEach(function (id) {
            document.getElementById(id).checked = (storage[id] === true);
        });
    });

    // --- Save checkbox state on change (one listener via event delegation) ---
    document.querySelector('.searchOptions').addEventListener('change', function (e) {
        if (e.target.type === 'checkbox' && LIBRARY_IDS.includes(e.target.id)) {
            chrome.storage.sync.set({ [e.target.id]: e.target.checked });
        }
    });

    // --- Select All / Deselect All ---
    const selectAllBtn = document.getElementById('btnSelectAll');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', function () {
            const allChecked = LIBRARY_IDS.every(id => document.getElementById(id).checked);
            const newState = !allChecked;
            const updates = {};
            LIBRARY_IDS.forEach(function (id) {
                document.getElementById(id).checked = newState;
                updates[id] = newState;
            });
            chrome.storage.sync.set(updates);
            selectAllBtn.textContent = newState ? 'Deselect All' : 'Select All';
        });

        // Keep button label in sync with actual checkbox state
        document.querySelector('.searchOptions').addEventListener('change', function () {
            const allChecked = LIBRARY_IDS.every(id => document.getElementById(id).checked);
            selectAllBtn.textContent = allChecked ? 'Deselect All' : 'Select All';
        });
    }

    // --- Search button ---
    document.getElementById('btnOpenNewTab').addEventListener('click', function () {
        const raw = document.getElementById('searchInput').value.trim();
        if (!raw) return;
        const searchstring = encodeURIComponent(raw);

        LIBRARY_IDS.forEach(function (id) {
            if (document.getElementById(id).checked && SEARCH_URLS[id]) {
                chrome.tabs.create({ url: SEARCH_URLS[id] + searchstring });
            }
        });
    });

    // --- Search on Enter key ---
    document.getElementById('searchInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('btnOpenNewTab').click();
        }
    });
});
