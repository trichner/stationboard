/**
 * Created by Thomas on 13.04.2015.
 */
app.factory('API', function($q,$http) {
    var API = {};
    var API_ROOT = 'https://transport.opendata.ch';
    var URL = {
        STATIONBOARD : '/v1/stationboard'
    }

    API.TRANSPORTATIONS = {
        ICE_TGV_RJ : "ice_tgv_rj",
        EC_IC : "ec_ic",
        IR : "ir",
        RE_D : "re_d",
        SHIP : "ship",
        S_SN_R : "s_sn_r",
        BUS : "bus",
        CABLEWAY : "cableway",
        ARZ_EXT : "arz_ext",
        TRAMWAY_UNDERGROUND : "tramway_underground"
    }
    /*
     http://transport.opendata.ch/#stationboard
     */
    API.getStationboard = function(station,id,transportations,limit,datetime){
        var transportationsList = transportations.map(function (e) {
            return "transportations[]=" + e
        })
        transportationsList = transportationsList.join('?')
        var url = API_ROOT + URL.STATIONBOARD;
        var deferred = $q.defer();
        $http.get(url,{
            params: {station : station,
                     id : id,
                     //transportationsList : transportationsList,
                     limit : limit,
                     datetime : datetime},
            data : transportationsList
        }).
            success(function(data, status, headers, config) {
                deferred.resolve(data)
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data)
            });
        return deferred.promise;
    }

    return API;
});