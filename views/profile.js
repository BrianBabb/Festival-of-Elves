<% - include('partials/header') %>
    <div class="container mt-5">
        <h1>Family Profile</h1>
        <h2>Complete your family profile to customize letters to your children and assign elves to your profile.</h2>

        <div class="row">
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-body">
                        <form action="/family_profile" method="POST">

                            <div class="form-group">
                                <label for="text">First Name</label>
                                <input type="text" class="form-control" name="firstName">
                            </div>
                                                
                            <div class="form-group">
                                <label for="text">Last Name</label>
                                <input type="text" class="form-control" name="lastName">
                            </div>

                            <div class="form-group">
                                <label for="text">First Child: First Name</label>
                                <input type="text" class="form-control" name="firstChildName">
                            </div>

                            <div class="form-group">
                                <label for="text">Second Child: Second Name</label>
                                <input type="text" class="form-control" name="secondChildName">
                            </div>
                            
                            <div class="form-group">
                                <label for="text">Third Child: First Name</label>
                                <input type="text" class="form-control" name="thirdChildName">
                            </div>

                            <div class="form-group">
                                <label for="checkbox">Elf: Joy</label>
                                <input type="checkbox" class="form-control" name="joyElf">
                            </div>

                            <div class="form-group">
                                <label for="checkbox">Elf: Noel</label>
                                <input type="checkbox" class="form-control" name="noelElf">
                            </div>
                            
                            <div class="form-group">
                                <label for="checkbox">Elf: Hope</label>
                                <input type="checkbox" class="form-control" name="hopeElf">
                            
                            </div>

                            <div class="form-group">
                                <label for="checkbox">Elf: X</label>
                                <input type="checkbox" class="form-control" name="xElf">
                            </div>
                            
                            <div class="form-group">
                                <label for="checkbox">Elf: Y</label>
                                <input type="checkbox" class="form-control" name="yElf">
                            </div>
                                                                                
                            <div class="form-group">
                                <label for="checkbox">Elf: Z</label>
                                <input type="checkbox" class="form-control" name="zElf">
                            </div>

                            <button type="submit" class="btn btn-dark">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
<%- include('partials/header') %>