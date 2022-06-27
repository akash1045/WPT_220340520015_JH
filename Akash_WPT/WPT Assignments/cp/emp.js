$(() => {
    console.log('Dom loaded');

    function showContents() {
        let ajaxparams = {
            data: {},
            url: "http://localhost:900/getAlldetails",
            type: 'get',
            dataType: "json",
            success: (data) => {
                emp = data;

                let empdetails = "";
                for (let i = 0; i < emp.length; i++) {
                    empdetails += "<br/>" + emp[i].empid + "  " + emp[i].ename + " " + emp[i].dname+ " " + emp[i].sal;
                }
                $("#contents").html(empdetails);

            },
            error: (error) => { console.log("failure " + error) }

        };//end of the object creation for ajaxparams
        
        $.ajax(ajaxparams);
    }


    $('#btninsert').click(() => {
        console.log('insert button clicked');

        let ip = {
            employeeid: $('#empid').val(),
            employeename: $('#empname').val(),
            deptname: $('#deptname').val(),
            salary: $('#salary').val()
        };

        let parameterstothefunction = {
            data: ip,
            url: "http://localhost:900/insert",
            type: 'get',
            dataType: "json",
            success: (data) => {
                console.log("data given by server in success " + data.status);

                if (data.status == true) {

                    $('#msg').html(data.message);
                }
                else {

                    $('#msg').html(data.message);
                }
                showContents();
            },
            error: (data) => { console.log("failed to contact server " + data.status) }
        };


        console.log("is the function working");
        $.ajax(parameterstothefunction);

    });


    $('#btnupdate').click(() => {
        console.log('update button clicked');

        let ip = {
            employeeid: $('#empid').val(),
            employeename: $('#empname').val(),
            deptname: $('#deptname').val(),
            salary: $('#salary').val()
        };

        let parameterstothefunction = {
            data: ip,
            url: "http://localhost:900/update",
            type: 'get',
            dataType: "json",
            success: (data) => {
                console.log("data given by server in success " + data.status);

                if (data.status == true) {

                    $('#msg').html("Employee information updated");
                }
                showContents();

            },
            error: (data) => { console.log("failed to contact server " + data.status) }
        };


        console.log("is the function working");
        $.ajax(parameterstothefunction);
    });


    $('#res').click(() => {
        console.log('reset button clicked');

        $('#empid').val("");
        $('#empname').val("");
        $('#deptname').val("");
        $('#salary').val("");
        $("#empid").prop('disabled', false);
        $('#msg').html("Message");
        $("#btnupdate").prop('disabled', false);
        $('#contents').html("");
        $("#del").prop('disabled', false);
    });


    $('#empid').blur(() => {
        console.log('blur event occured');


        let ip = {
            employeeid: $('#empid').val()
        };

        let parameterstothefunction = {
            data: ip,
            url: "http://localhost:900/showinfo",
            type: 'get',
            dataType: "json",
            success: (data) => {
                console.log("data given by server in success in blur" + data.status);

                if (data.status == true) {
                    $('#empname').val(data.ename);
                    $('#deptname').val(data.dname);
                    $('#salary').val(data.sal);
                    $('#msg').html(data.message);
                    $("#empid").prop('disabled', true);
                    $("#btnupdate").prop('disabled', false);
                    $("#del").prop('disabled', false);
                }
                else {

                    $('#msg').html(data.message);
                    $("#btnupdate").prop('disabled', true);
                    $("#del").prop('disabled', true);
                }

            },
            error: (data) => { console.log("failed to contact server " + data.status) }
        };


        console.log("is the function working");
        $.ajax(parameterstothefunction);

    });

    $('#showall').click(()=>{
        showContents();
    });

    $("#del").click(()=>{
        console.log("delete button clicked");
        let y = $('#empid').val();
        
        confirm("Do you want to delete the data ?")
      
        let parameterstothefunction = {
            data: {x:y},
            url: "http://localhost:900/deleteemp",
            type: 'get',
            dataType: "json",
            success: (data) => {
                console.log("data given by server in success in blur" + data.status);

                if (data.status == true) {
                    $('#empname').val("");
                    $('#deptname').val("");
                    $('#salary').val("");
                    $('#empid').val("");
                    $('#msg').html(data.message);
                    $("#empid").prop('disabled', false);
                    
                }
                else {

                    $('#msg').html(data.message);
                  
                }

            },
            error: (data) => { console.log("failed to contact server " + data.status) }
        };


        console.log("is the function working");
        $.ajax(parameterstothefunction);
    });

});