/**
 * Created by shaileshyedge on 4/22/17.
 */

var http = require('https');
function getWayPoints() {
    var startlocation = "190 Ryland St, San Jose,CA,95110";
    var endlocation =    "1 Washington Sq, San Jose, CA 95192"
    var waypoints = "272 E Santa Clara St, San Jose, CA 95113|100 S 2nd St, San Jose, CA 95113";
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=";
    var output_url = url + startlocation + "&destination=" + endlocation + "&waypoints=optimize:true|" + waypoints + "&key=AIzaSyD3pVCTqVUv3AbCVPM_aZAnu9eChbcVdMM";
    //var request = http.get('https://maps.googleapis.com/maps/api/directions/json?origin=190 Ryland St,San Jos, 95110,MA&destination=Concord,MA&waypoints=Charlestown,MA|via:Lexington,MA&key=AIzaSyD3pVCTqVUv3AbCVPM_aZAnu9eChbcVdMM'
    var request = http.get(output_url
    , function (res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
               // console.log(body);
                var data = JSON.parse(body);
                console.log(data.routes[0].waypoint_order);
            });
        }).on('error', function(e) {
        console.log("Got error: " + e.message);
        }
    );
}

exports.getWayPoints = getWayPoints;
