import $ from 'jquery';



let Ajax = {

    post (url, data) {
        let type = 'post';
        let dataType = 'json';
        return $.ajax(url, {type, dataType, data});
    }

};



export default Ajax;