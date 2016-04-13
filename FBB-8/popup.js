/**
 * Created by ianb on 2/26/2016.
 */
window.onload = function(){
    var isChangelogOpen = false;
    debugger;
    document.getElementById('crawl-launcher').onclick = toggleChangelogCrawl;
    document.getElementById('changelog-panel').addEventListener("animationend", resetAnimationIterations, false);

    function toggleChangelogCrawl(e) {
        var crawlLauncher = document.getElementById('crawl-launcher');
        var crawltext = document.getElementById('crawltext');
        var changelog = document.getElementById('changelog');
        var changelogPanel = document.getElementById('changelog-panel');

        if(!isChangelogOpen){
            changelog.classList.add('active');
            crawltext.classList.add('active');
            changelogPanel.classList.remove('inactive');
            changelogPanel.classList.remove('active');
            setTimeout(
                function(){
                    changelogPanel.classList.add('active');
                },.1
            );
            crawlLauncher.innerHTML = 'Hide Changelog';
            isChangelogOpen = true;

        }else{
            changelog.classList.remove('active');
            crawltext.classList.remove('active');
            changelogPanel.classList.remove('active');
            changelogPanel.classList.remove('inactive');
            setTimeout(
                function(){
                    changelogPanel.classList.add('inactive');
                },.1
            );            crawlLauncher.innerHTML = 'View Changelog';
            isChangelogOpen = false;
        }
    }


    function resetAnimationIterations(e) {
        console.log(e);
        console.log(document.getElementById('changelog-panel'));
        e.preventDefault();
    }
}();