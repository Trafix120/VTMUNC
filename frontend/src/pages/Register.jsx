import React from 'react';
import './Register.css';

function SignUp() {
    return (
        <main class="container registerPage">
            <div class="row">
                <div class="col-md-12">

                    <h1> Registration</h1>

                    <div class="group">
                        <h4>Dear Advisors and Independent Delegates,</h4>
                        <p>Thank you for your registration for VTMUNC! For independent delegates that are staying in Blacksburg overnight, please contact Delaney Moran, our charge d'affairs on chargedaffaires@vtmunc.org, so we can send you a liability waiver form.</p>
                    </div>

                    <div class="group">
                        <h4>Payment Information,</h4>
                        <p>
                            Once you have completed this form, we will send you an invoice. Your delegation's registration will only be complete when you paid this invoice. Those invoices must be paid two weeks after the registration page.<br />
                            Late registration: The latest to pay January 26th<br />
                            <br />
                            Individual Delegates<br />
                            Early Registration: September to October 29th $50<br />
                            Normal Registration: October 30th to December 10th $60<br />
                            Late Registration: December 11th to January 19th $70<br />
                            <br />
                            Delegation Fees (a group of more than 3 people)<br />
                            Early: $60<br />
                            Normal: $70<br />
                            Late: $80<br />
                        </p>
                    </div>

                    <form asp-action="Create">
                        <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                        <div class="group">
                            <h4>Advisor(s) Information</h4>
                            <p>Please provide your contact information. We will use this information to stay in touch with you as we prepare for the conference, and to send you an invoice when required. If you are an independent delegate, describe your relation to the independent delegate (e.g: Parent or Self).</p>
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Advisor Email</h5>
                                    <input asp-for="AdvisorEmail" class="form-control" />
                                    <span asp-validation-for="AdvisorEmail" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h5> Advisor Name</h5>
                                    <input asp-for="AdvisorName" class="form-control" />
                                    <span asp-validation-for="AdvisorName" class="text-danger"></span>
                                </div>
                                <div class="col-md-3">
                                    <h5>Phone Number</h5>
                                    <input asp-for="AdvisorPhone" class="form-control" />
                                    <span asp-validation-for="AdvisorPhone" class="text-danger"></span>
                                </div>
                                <div class="col-md-5">
                                    <h5>Describe your relation to the school (Teacher, Parent, etc)</h5>
                                    <input asp-for="AdvisorRelation" class="form-control" />
                                    <span asp-validation-for="AdvisorRelation" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>List the name of your other advisors and other contact information if there are any.</h5>
                                    <input asp-for="AdvisorOtherInformation" class="form-control" />
                                    <span asp-validation-for="AdvisorOtherInformation" class="text-danger"></span>
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <h4>Head Delegate Information</h4>
                            <p>A head delegate is a designated student representative who will lead their organization. Advisors, please provide the information for those head delegates. However, filling out this section is not required.  Independent delegates should also not fill out this form. </p>

                            <div class="row">
                                <div class="col-md-4">
                                    <h5>Head Delegate Email</h5>
                                    <input asp-for="HeadDelegateEmail" class="form-control" />
                                    <span asp-validation-for="HeadDelegateEmail" class="text-danger"></span>
                                </div>
                                <div class="col-md-4">
                                    <h5>Head Delegate Name</h5>
                                    <input asp-for="HeadDelegateName" class="form-control" />
                                    <span asp-validation-for="HeadDelegateName" class="text-danger"></span>
                                </div>
                                <div class="col-md-4">
                                    <h5>Phone Number</h5>
                                    <input asp-for="HeadDelegatePhone" class="form-control" />
                                    <span asp-validation-for="HeadDelegatePhone" class="text-danger"></span>
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <h4>School and Organizational Info.</h4>
                            <p>
                                Please provide the following information about your school and organization. Independent delegates are kindly asked to list "Independent Delegate” under “School Name” and to use their personal address instead of a school address.<br />

                                If, after submitting this form, you would like to add or drop delegates, please reach out to our Chargé d'Affaires, Delaney Moran, chargedaffaires@vtmunc.org <br />
                            </p>

                            <div class="row">
                                <div class="col-md-6">
                                    <h5>School Name</h5>
                                    <input asp-for="SchoolName" class="form-control" />
                                    <span asp-validation-for="SchoolName" class="text-danger"></span>
                                </div>
                                <div class="col-md-2">
                                    <h5>Delegation Size</h5>
                                    <input asp-for="DelegationSize" class="form-control" />
                                    <span asp-validation-for="DelegationSize" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <h5>School Mailing Address (In case we need to mail lost items or awards and merchandise)</h5>
                                    <input asp-for="SchoolMailingAddress" class="form-control" />
                                    <span asp-validation-for="SchoolMailingAddress" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Names of Delegates (please respond in a list format) [Not required]</h5>
                                    <textarea asp-for="NamesOfDelegates" class="form-control"> </textarea>
                                    <span asp-validation-for="NamesOfDelegates" class="text-danger"></span>
                                </div>
                            </div>
                        </div>


                        <div class="group">
                            <h4>Agreement to Abide by Conference Policies</h4>
                            <p><a href="/Policy/Conference_Policies.pdf" target="_blank">VTMUNC policies</a> are published in the website. The VTMUNC staff, including the Secretary General and the Secretariat, are released from liability for delegate conduct for the duration of the conference. Additionally, VTMUNC staff reserves the right to ask a delegate to leave the conference if said delegate violates our policies.</p>
                            <h5>Do you agree to the terms stated</h5>


                            <div class="form-group custom-control custom-checkbox">
                                <input asp-for="IsAgreeWithTerms" class="custom-control-input" />
                                <label asp-for="IsAgreeWithTerms" class="custom-control-label">&nbsp;</label>
                                <span asp-validation-for="IsAgreeWithTerms" class="text-danger"></span>
                            </div>
                        </div>

                        <div class="group">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4>Comments or Questions?</h4>
                                    <p>If you have any comments or questions, please write them below!</p>
                                    <textarea asp-for="CommentsOrQuestions" class="form-control"> </textarea>
                                    <span asp-validation-for="CommentsOrQuestions" class="text-danger"></span>
                                </div>
                            </div>
                        </div>


                        
                        <div class="form-group">
                            <input type="submit" value="Register" class="btn btn-primary" />
                        </div>
                    </form>
                </div>
                </div>
        </main>
    )
}

export default SignUp;