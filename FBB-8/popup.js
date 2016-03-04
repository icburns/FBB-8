/**
 * Created by ianb on 2/26/2016.
 */
window.onload = function(){
    var isChangelogOpen = false;
    debugger;
    document.getElementById('crawl-launcher').onclick = toggleChangelogCrawl;

    function toggleChangelogCrawl(e) {
        var crawltext = document.getElementsById('crawltext');
        var changelog = document.getElementById('changelog');
        if(!isChangelogOpen){
            changelog.classList.add('.show');
            crawltext.classList.add('.active');
        }
        changelog.classList.remove('.show');
        crawltext.classList.remove('.active');
    }
}();