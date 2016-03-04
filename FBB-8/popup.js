/**
 * Created by ianb on 2/26/2016.
 */
window.onload = function(){
    var isChangelogOpen = false;
    debugger;
    document.getElementById('crawl-launcher').onclick = toggleChangelogCrawl;

    function toggleChangelogCrawl(e) {
        var crawltext = document.getElementById('crawltext');
        var changelog = document.getElementById('changelog');
        var changelogPanel = document.getElementById('changelog-panel');

        if(!isChangelogOpen){
            changelog.classList.add('show');
            crawltext.classList.add('active');
            changelogPanel.classList.add('active');
            isChangelogOpen = true;
        }else{
            changelog.classList.remove('show');
            crawltext.classList.remove('active');
            changelogPanel.classList.remove('active');
            isChangelogOpen = false;
        }
    }
}();