/**
 * Created by shaileshyedge on 4/22/17.
 */

var http = require('https');
function getWayPoints() {
    var request = http.get('https://maps.googleapis.com/maps/api/directions/json?origin=190 Ryland St,San Jose, CA, 95110,MA&destination=Concord,MA&waypoints=Charlestown,MA|via:Lexington,MA&key=AIzaSyD3pVCTqVUv3AbCVPM_aZAnu9eChbcVdMM'
    , function (res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
                console.log(body);
            });
        }).on('error', function(e) {
        console.log("Got error: " + e.message);
        }
    );
}

exports.getWayPoints = getWayPoints;
