import React, { useEffect, useState } from "react";
import config from "../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  GetOneUserSettingRequest,
  DelUserEmailSettingRequest,
  DelUserPhoneSettingRequest,
} from "../../../redux-saga/actions/UserSetting";

export default function Setting() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSettingState);

  useEffect(() => {
    dispatch(GetOneUserSettingRequest(1));
  }, []);

  const onDeletedEmail = async (id, email) => {
    dispatch(DelUserEmailSettingRequest(id, email));
  };
  const onDeletedPhone = async (id, phone) => {
    dispatch(DelUserPhoneSettingRequest(id, phone));
  };

  console.info(user);
  return (
    <div>
      <div className="border border-slate-300 pl-6 border-b-slate-600 ">
        {/* Logo */}
        <div className="mt-6 flex border-b-2">
          <img
            className="h-10 w-auto "
            src="../../assets/images/codeid.png"
            alt="codeid"
          />
          <p className="text-2xl mt-2 font-semibold mb-2">Code Academy</p>
        </div>
        <div>
          <p className="my-4">Home / Setting</p>
        </div>
      </div>
      {/* setting */}
      <div className="border border-slate-300">
        <h1 className="text-lg font-semibold my-2 pl-4">Setting</h1>
      </div>
      {/* container profile */}
      <div className="border border-slate-300 ">
        {/* countainer rounded */}
        <div className="border border-slate-800 mx-2 mr-6 mt-2 rounded-2xl mb-7 ">
          <div>
            <p className="border border-slate-500 mt-5 p-1 pl-2 font-semibold">
              Profile
            </p>
          </div>
          <div className="my-4">
            <p className="pl-6">
              This information will be display, so be careful what you share
            </p>
            {/* Foto dan text */}
            <div className="my-7 flex">
              <div>
                {user.user_photo ? (
                  <img
                    className="ml-7 rounded-full h-24 border-2"
                    src={`${config.domain}/setting/${user.user_entity_id}/images/${user.user_photo}`}
                    height={100}
                    width={100}
                    crossOrigin="anonymous"
                  ></img>
                ) : (
                  <div className="mt-6">
                    <span className="ml-10 px-2 py-6 border border-slate-600 rounded-full text-xs">
                      No Profile
                    </span>
                  </div>
                )}
              </div>
              <div className="ml-6 mt-9">
                <p>{user.user_name}</p>
                <p>Kandidat Bootcamp</p>
              </div>
            </div>
            <div className="flex justify-end mr-6">
              <button>Edit</button>
            </div>
          </div>
          {/* end Foto dan text */}
          {/* Login */}
          <div>
            <p className="border border-slate-500 mt-5 p-1 pl-2 font-semibold">
              Login
            </p>
            <div className="flex justify-between">
              <p className="pl-6 mt-4">Change Password</p>
              <button className="mx-6 mt-4 ">Edit</button>
            </div>
          </div>
          {/* end Login */}
          {/* Container Email */}
          <div>
            <div className="flex border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
              <p>Emails</p>
              <button className="mr-5">+ Add</button>
            </div>
            <div className="flex mt-6">
              <div className="pl-6 w-2/12">
                <p className="mr-9">Your Emails :</p>
              </div>
              <div className="w-10/12">
                {user.users_emails &&
                  user.users_emails.map((email, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between border-b-2 mb-3 pl-2"
                      >
                        <div>
                          <p>{email.pmail_address}</p>
                        </div>
                        <div className="mr-4">
                          <button className="mr-2">/ Edit</button>
                          <button
                            onClick={() => {
                              if (window.confirm("Delete this record ?")) {
                                onDeletedEmail(
                                  user.user_entity_id,
                                  email.pmail_id
                                );
                              }
                            }}
                            className="ml-2"
                          >
                            X Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* End Email */}
          {/* Phones */}
          <div>
            <div className="flex border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
              <p>Phones</p>
              <button className="mr-5">+ Add</button>
            </div>
            <div className="flex mt-6">
              <div className="pl-6 w-2/12">
                <p className="mr-9">Your Phones :</p>
              </div>
              <div className="w-10/12">
                {user.users_phones &&
                  user.users_phones.map((phone, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between border-b-2 mb-3 pl-2"
                      >
                        <div>
                          <p>
                            {phone.uspo_number}
                            <span className="ml-2">
                              ({phone.uspo_ponty_code})
                            </span>
                          </p>
                        </div>
                        <div className="mr-2 col-span-2 justify-items-end">
                          <button className="">/ Edit</button>
                          <button
                            onClick={() => {
                              if (window.confirm("Delete this record ?")) {
                                onDeletedPhone(
                                  phone.uspo_entity_id,
                                  phone.uspo_number
                                );
                              }
                            }}
                            className="ml-2 mr-2"
                          >
                            X Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* End Phones */}
          {/* Address */}
          <div>
            <div className="flex border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
              <p>Address</p>
              <button className="mr-5">+ Add</button>
            </div>
            <div className="flex mt-6">
              <div className="pl-6 w-2/12">
                <p className="mr-9">Your Address :</p>
              </div>
              <div className="w-10/12">
                {user.users_addresses &&
                  user.users_addresses.map((address, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between border-b-2 mb-3 pl-2"
                      >
                        <div>
                          <p>{address.etad_addr.addr_line1}</p>
                          <p>
                            <span>City :</span>
                            {address.etad_adty.adty_name}
                          </p>
                        </div>
                        <div className="mr-2 borde mt-6">
                          <button>/ Edit</button>
                          <button className="ml-2 mr-2">X Delete</button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* End Address */}
          {/* Container Educations */}
          <div>
            <div className="flex border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
              <p>Educations</p>
              <button className="mr-5">+ Add</button>
            </div>
          </div>
          <div>
            {user.users_educations &&
              user.users_educations.map((educ, index) => {
                return (
                  <div key={index} className=" border-b-2 mb-2">
                    <div>
                      <div className="flex ml-20 mt-6 mb-2">
                        <p className="mr-12">School</p>
                        <span className="ml-1"> : </span>
                        <p className="ml-3">{educ.usdu_school}</p>
                      </div>
                      <div className="flex ml-20 mb-2">
                        <p className="mr-12">Degree</p>
                        <span> : </span>
                        <p className="ml-3">{educ.usdu_degree}</p>
                      </div>
                      <div className="flex ml-20 mb-2">
                        <p className="mr-6">Field Study</p>
                        <span> : </span>
                        <p className="ml-3">{educ.usdu_field_study}</p>
                      </div>
                      <div className="flex ml-20 mb-2">
                        <p className="mr-5">Grade (IPK)</p>
                        <span> : </span>
                        <p className="ml-3">{educ.usdu_grade}</p>
                      </div>
                      <div className="flex ml-20 mb-2">
                        <p className="mr-16">Year</p>
                        <span className="ml-1"> : </span>
                        <p className="ml-3">
                          {moment(educ.usdu_start_date).format("YYYY")}
                        </p>
                        <span className="mx-2">Until</span>
                        <p>{moment(educ.usdu_end_date).format("YYYY")}</p>
                      </div>
                      <div className="flex ml-20 mb-2">
                        <p className="mr-11">Activity</p>
                        <span> : </span>
                        <p className="ml-3">{educ.usdu_activities}</p>
                      </div>
                      <div className="flex ml-20 mb-2">
                        <p className="mr-2">Descriptions</p>
                        <span> : </span>
                        <p className="ml-3">{educ.usdu_description}</p>
                      </div>
                    </div>
                    <div className="mr-2 flex justify-end">
                      <button>/ Edit</button>
                      <button className="ml-2 mr-2">X Delete</button>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* End Container Educations */}
          {/* Container Experiences */}
          <div>
            <div className="flex border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
              <p>Experiences</p>
              <button className="mr-5">+ Add</button>
            </div>
            <div className="">
              {user.users_experiences &&
                user.users_experiences.map((expe, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between w-full border-b-2 mb-3 pl-14"
                    >
                      <div>
                        <p className="font-bold text-lg">
                          {expe.usex_industry}
                        </p>
                        <p>{expe.usex_profile_headline}</p>
                        <p className="font-semibold text-lg">
                          {expe.usex_company_name}
                        </p>
                        <p>
                          {/* Moment js dependency untuk merubah tanggal */}
                          <span>
                            {moment(expe.usex_start_date).format("MMMM YYYY")}
                          </span>
                          <span className="mx-3">-</span>
                          <span>
                            {moment(expe.usex_end_date).format("MMMM YYYY")}
                          </span>
                        </p>
                        <p>{expe.usex_city.city_name}</p>
                      </div>
                      <div className="mr-2 grid place-items-end">
                        <div className="flex">
                          <button>/ Edit</button>
                          <button className="ml-2 mr-2">X Delete</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* End Container Experiences */}
          {/* Container Skills */}
          <div>
            <div className="flex border border-slate-500 justify-between mt-5 py-1 pl-2 font-semibold ">
              <p>Skills</p>
              <button className="mr-5">+ Add</button>
            </div>
            <div className="flex mt-6">
              <div className="w-full">
                {user.users_skills &&
                  user.users_skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between border-b-2 mb-3 pl-16 ml-2"
                      >
                        <div>
                          <p>{skill.uski_skty_name}</p>
                        </div>
                        <div className="mr-2">
                          <button className="ml-2 mr-2">X Delete</button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* End Container Skills */}
        </div>
      </div>
    </div>
  );
}
