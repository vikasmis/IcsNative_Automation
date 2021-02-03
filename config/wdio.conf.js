import { ReportAggregator, HtmlReporter} from '@rpii/wdio-html-reporter' ;
module.exports = {

  
  reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'ICS Test',
            showInBrowser: true,
            useOnAfterCommandForScreenshot: false,
            LOG: log4j.getLogger("default")
        }
        ]
    ]
    
 
};