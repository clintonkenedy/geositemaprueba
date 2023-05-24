class GeojsonService {
  static async get() {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let ga =
      "http://192.168.0.10:8080/geoserver/Prueba_01/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Prueba_01%3AMZ%20SEC02&maxFeatures=50&outputFormat=application%2Fjson";

    fetch(
      "http://192.168.0.10:8080/geoserver/Prueba_01/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Prueba_01%3AMZ%20SEC02&maxFeatures=50&outputFormat=application%2Fjson",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // return await fetch(ga, requestOptions);
  }
}
export default GeojsonService;
