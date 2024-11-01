"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    enterpriseName: "",
    partOfGroup: "",
    headOrAffiliate: "",
    headLocation: "",
    headCountry: "",
    reportingUnit: "",
    subsidiariesCovered: "",
    reportingYear: "",
    reportingPeriod: "",
    businessRegistrationNumber: "",
    address: {
      street: "",
      city: "",
      region: "",
      postCode: "",
    },
    website: "",
    email: "",
    contactNumber: "",
    mainBusinessActivity: "",
    isicCode: "",
    governmentOwned: "",
    establishmentYear: "",
    totalEmployees: "",
    worldwideWorkforce: "",
    domesticSales: "",
    carriedOutRD: "",
    providedFundsForRD: "",
    totalIntramualRDExpenditure: "",
    rdLaborCosts: "",
    rdOtherCurrentCosts: "",
    rdCapitalExpenditure: {
      landAndBuildings: "",
      machineryAndEquipment: "",
      capitalizedSoftware: "",
      otherIntellectualProperty: "",
    },
    rdTypeAllocation: {
      basicResearch: "",
      appliedResearch: "",
      experimentalDevelopment: "",
    },
    rdIndustryOrientation: [],
    rdGeographicLocation: [],
    rdKeyTechnologies: {
      ictHardware: "",
      software: "",
      artificialIntelligence: "",
      biotechnology: "",
      renewableEnergy: "",
    },
    rdFieldOfResearch: {
      naturalSciences: "",
      engineeringAndTechnology: "",
      medicalAndHealthSciences: "",
      agriculturalAndVeterinarySciences: "",
      socialSciences: "",
      humanitiesAndArts: "",
    },
    rdSocioEconomicObjective: {
      earthExploration: "",
      environment: "",
      spaceExploration: "",
      transport: "",
      energy: "",
      industrialProduction: "",
      health: "",
      agriculture: "",
      education: "",
      culture: "",
      politicalSystems: "",
      defence: "",
    },
    sourcesOfFunds: {
      parentCompanies: { ksa: "", abroad: "" },
      nonAffiliatedCompanies: { ksa: "", abroad: "" },
      governmentGrants: { ksa: "" },
      governmentContracts: { ksa: "" },
      foreignGovernments: { abroad: "" },
      higherEducation: { ksa: "", abroad: "" },
      privateNonProfits: { ksa: "", abroad: "" },
      ownFunds: { ksa: "", abroad: "" },
    },
    rdTaxCredits: {
      received: "",
      amount: "",
    },
    extramualRD: {
      madePayments: "",
      totalAmount: "",
    },
    rdRelatedIP: {
      madePayments: "",
      totalAmount: "",
    },
    rdPersonnel: {
      internal: {
        researchers: { male: "", female: "" },
        technicians: { male: "", female: "" },
        supportStaff: { male: "", female: "" },
      },
      external: {
        researchers: { male: "", female: "" },
        technicians: { male: "", female: "" },
        supportStaff: { male: "", female: "" },
      },
    },
    rdPersonnelEducation: {
      researchers: {
        phd: { male: "", female: "" },
        masters: { male: "", female: "" },
        bachelors: { male: "", female: "" },
        otherTertiary: { male: "", female: "" },
        nonTertiary: { male: "", female: "" },
      },
      techniciansAndSupportStaff: {
        phd: { male: "", female: "" },
        masters: { male: "", female: "" },
        bachelors: { male: "", female: "" },
        otherTertiary: { male: "", female: "" },
        nonTertiary: { male: "", female: "" },
      },
    },
    rdPersonnelCitizenship: {
      researchers: {
        ksa: { male: "", female: "" },
        foreign: { male: "", female: "" },
      },
      techniciansAndSupportStaff: {
        ksa: { male: "", female: "" },
        foreign: { male: "", female: "" },
      },
    },
    rdOutputs: {
      patents: false,
      trademarks: false,
      copyrights: false,
      industrialDesigns: false,
    },
    rdCollaboration: {
      ksa: [],
      gulfStates: [],
      nonGulfStates: [],
    },
  });

  const handleNestedInputChange = (category, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }));
  };

  const totalSteps = 15;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  const handleDeepNestedInputChange = (category, subcategory, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [subcategory]: {
          ...prevState[category][subcategory],
          [field]: value,
        },
      },
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>R&D Questionnaire</CardTitle>
        <CardDescription>
          Please provide information about your enterprise's R&D activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="w-full mb-6" />
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="enterpriseName">Name of the enterprise</Label>
              <Input
                id="enterpriseName"
                name="enterpriseName"
                value={formData.enterpriseName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Is your enterprise part of a group?</Label>
              <RadioGroup
                name="partOfGroup"
                value={formData.partOfGroup}
                onValueChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    partOfGroup: value,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="partOfGroupYes" />
                  <Label htmlFor="partOfGroupYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="partOfGroupNo" />
                  <Label htmlFor="partOfGroupNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            {formData.partOfGroup === "yes" && (
              <>
                <div>
                  <Label htmlFor="headOrAffiliate">
                    Is your business the head of the group or an affiliate?
                  </Label>
                  <Select
                    name="headOrAffiliate"
                    value={formData.headOrAffiliate}
                    onValueChange={(value) =>
                      setFormData((prevState) => ({
                        ...prevState,
                        headOrAffiliate: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="head">Head of the group</SelectItem>
                      <SelectItem value="affiliate">Affiliate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {formData.headOrAffiliate === "affiliate" && (
                  <>
                    <div>
                      <Label htmlFor="headLocation">
                        Is the head of the group located in KSA or abroad?
                      </Label>
                      <Select
                        name="headLocation"
                        value={formData.headLocation}
                        onValueChange={(value) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            headLocation: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ksa">KSA</SelectItem>
                          <SelectItem value="abroad">Abroad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {formData.headLocation === "abroad" && (
                      <div>
                        <Label htmlFor="headCountry">
                          Please specify which country
                        </Label>
                        <Input
                          id="headCountry"
                          name="headCountry"
                          value={formData.headCountry}
                          onChange={handleInputChange}
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="reportingUnit">
                Are you reporting data for your enterprise, group (consolidated)
                or any other statistical unit?
              </Label>
              <Select
                name="reportingUnit"
                value={formData.reportingUnit}
                onValueChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    reportingUnit: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="group">Group (consolidated)</SelectItem>
                  <SelectItem value="other">Other statistical unit</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.reportingUnit === "group" && (
              <div>
                <Label htmlFor="subsidiariesCovered">
                  Please list which subsidiaries are covered
                </Label>
                <Input
                  id="subsidiariesCovered"
                  name="subsidiariesCovered"
                  value={formData.subsidiariesCovered}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div>
              <Label htmlFor="reportingYear">
                Are you reporting data for calendar year 2023?
              </Label>
              <RadioGroup
                name="reportingYear"
                value={formData.reportingYear}
                onValueChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    reportingYear: value,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="reportingYearYes" />
                  <Label htmlFor="reportingYearYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="reportingYearNo" />
                  <Label htmlFor="reportingYearNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            {formData.reportingYear === "no" && (
              <div>
                <Label htmlFor="reportingPeriod">
                  Please list the dates of the reporting period
                </Label>
                <Input
                  id="reportingPeriod"
                  name="reportingPeriod"
                  value={formData.reportingPeriod}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="businessRegistrationNumber">
                Business Registration Number
              </Label>
              <Input
                id="businessRegistrationNumber"
                name="businessRegistrationNumber"
                value={formData.businessRegistrationNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="street">Street Name and Number</Label>
              <Input
                id="street"
                name="street"
                value={formData.address.street}
                onChange={handleAddressChange}
              />
            </div>
            <div>
              <Label htmlFor="city">City/Town</Label>
              <Input
                id="city"
                name="city"
                value={formData.address.city}
                onChange={handleAddressChange}
              />
            </div>
            <div>
              <Label htmlFor="region">Region/Province</Label>
              <Input
                id="region"
                name="region"
                value={formData.address.region}
                onChange={handleAddressChange}
              />
            </div>
            <div>
              <Label htmlFor="postCode">Post Code</Label>
              <Input
                id="postCode"
                name="postCode"
                value={formData.address.postCode}
                onChange={handleAddressChange}
              />
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="contactNumber">Contact number</Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="mainBusinessActivity">
                What is the main business activity of your enterprise?
              </Label>
              <Input
                id="mainBusinessActivity"
                name="mainBusinessActivity"
                value={formData.mainBusinessActivity}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="isicCode">ISIC Rev. 4 Code</Label>
              <Input
                id="isicCode"
                name="isicCode"
                value={formData.isicCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="governmentOwned">
                Is your enterprise Government-owned?
              </Label>
              <RadioGroup
                name="governmentOwned"
                value={formData.governmentOwned}
                onValueChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    governmentOwned: value,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="governmentOwnedYes" />
                  <Label htmlFor="governmentOwnedYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="governmentOwnedNo" />
                  <Label htmlFor="governmentOwnedNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="establishmentYear">
                Year in which your enterprise was established
              </Label>
              <Input
                id="establishmentYear"
                name="establishmentYear"
                type="number"
                value={formData.establishmentYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="totalEmployees">
                What is the total number of employees in your company (average
                during the reporting period) in headcounts?
              </Label>
              <Input
                id="totalEmployees"
                name="totalEmployees"
                type="number"
                value={formData.totalEmployees}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="worldwideWorkforce">
                If your company has employees in other countries, what is the
                total (worldwide) workforce?
              </Label>
              <Input
                id="worldwideWorkforce"
                name="worldwideWorkforce"
                type="number"
                value={formData.worldwideWorkforce}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="domesticSales">
                Total value of your company's domestic sales during year 2023
              </Label>
              <Input
                id="domesticSales"
                name="domesticSales"
                type="number"
                value={formData.domesticSales}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="carriedOutRD">
                Did your company carry out R&D (on its own behalf or on behalf
                of others) in year 2023?
              </Label>
              <RadioGroup
                name="carriedOutRD"
                value={formData.carriedOutRD}
                onValueChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    carriedOutRD: value,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="carriedOutRDYes" />
                  <Label htmlFor="carriedOutRDYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="carriedOutRDNo" />
                  <Label htmlFor="carriedOutRDNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="providedFundsForRD">
                Did your company provide funds to other parties (including firms
                it is affiliated with), to carry out substantive R&D work?
              </Label>
              <RadioGroup
                name="providedFundsForRD"
                value={formData.providedFundsForRD}
                onValueChange={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    providedFundsForRD: value,
                  }))
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="providedFundsForRDYes" />
                  <Label htmlFor="providedFundsForRDYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="providedFundsForRDNo" />
                  <Label htmlFor="providedFundsForRDNo">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="totalIntramualRDExpenditure">
                Please report your company's total in-house (intramural) R&D
                expenditure in year 2023
              </Label>
              <Input
                id="totalIntramualRDExpenditure"
                name="totalIntramualRDExpenditure"
                type="number"
                value={formData.totalIntramualRDExpenditure}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="rdLaborCosts">
                Your company's R&D labour costs
              </Label>
              <Input
                id="rdLaborCosts"
                name="rdLaborCosts"
                type="number"
                value={formData.rdLaborCosts}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="rdOtherCurrentCosts">
                Your company's other current R&D performance costs
              </Label>
              <Input
                id="rdOtherCurrentCosts"
                name="rdOtherCurrentCosts"
                type="number"
                value={formData.rdOtherCurrentCosts}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>
                Your company's capital expenditure on assets intended to be used
                for R&D
              </Label>
              <div className="space-y-2 mt-2">
                <div>
                  <Label htmlFor="landAndBuildings">Land and buildings</Label>
                  <Input
                    id="landAndBuildings"
                    name="landAndBuildings"
                    type="number"
                    value={formData.rdCapitalExpenditure.landAndBuildings}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdCapitalExpenditure",
                        "landAndBuildings",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="machineryAndEquipment">
                    Machinery and equipment
                  </Label>
                  <Input
                    id="machineryAndEquipment"
                    name="machineryAndEquipment"
                    type="number"
                    value={formData.rdCapitalExpenditure.machineryAndEquipment}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdCapitalExpenditure",
                        "machineryAndEquipment",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="capitalizedSoftware">
                    Capitalized computer software
                  </Label>
                  <Input
                    id="capitalizedSoftware"
                    name="capitalizedSoftware"
                    type="number"
                    value={formData.rdCapitalExpenditure.capitalizedSoftware}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdCapitalExpenditure",
                        "capitalizedSoftware",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="otherIntellectualProperty">
                    Other intellectual property products
                  </Label>
                  <Input
                    id="otherIntellectualProperty"
                    name="otherIntellectualProperty"
                    type="number"
                    value={
                      formData.rdCapitalExpenditure.otherIntellectualProperty
                    }
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdCapitalExpenditure",
                        "otherIntellectualProperty",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 8 && (
          <div className="space-y-4">
            <div>
              <Label>
                Please allocate your company's intramural R&D expenditure in
                2023 in the following categories:
              </Label>
              <div className="space-y-2 mt-2">
                <div>
                  <Label htmlFor="basicResearch">Basic research</Label>
                  <Input
                    id="basicResearch"
                    name="basicResearch"
                    type="number"
                    value={formData.rdTypeAllocation.basicResearch}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdTypeAllocation",
                        "basicResearch",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="appliedResearch">Applied research</Label>
                  <Input
                    id="appliedResearch"
                    name="appliedResearch"
                    type="number"
                    value={formData.rdTypeAllocation.appliedResearch}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdTypeAllocation",
                        "appliedResearch",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="experimentalDevelopment">
                    Experimental development
                  </Label>
                  <Input
                    id="experimentalDevelopment"
                    name="experimentalDevelopment"
                    type="number"
                    value={formData.rdTypeAllocation.experimentalDevelopment}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdTypeAllocation",
                        "experimentalDevelopment",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="rdIndustryOrientation">
                Please allocate your company's intramural R&D expenditure in
                2023 by product field:
              </Label>
              <Textarea
                id="rdIndustryOrientation"
                name="rdIndustryOrientation"
                value={formData.rdIndustryOrientation}
                onChange={handleInputChange}
                placeholder="Enter ISIC Rev.4 industry codes and amounts"
              />
            </div>
            <div>
              <Label htmlFor="rdGeographicLocation">
                Please allocate your company's intramural R&D expenditure in
                2023 by geographic location within KSA:
              </Label>
              <Textarea
                id="rdGeographicLocation"
                name="rdGeographicLocation"
                value={formData.rdGeographicLocation}
                onChange={handleInputChange}
                placeholder="Enter regions and amounts"
              />
            </div>
          </div>
        )}
        {step === 9 && (
          <div className="space-y-4">
            <div>
              <Label>
                Please report your company's intramural R&D expenditure in 2023
                for the following key technologies:
              </Label>
              <div className="space-y-2 mt-2">
                <div>
                  <Label htmlFor="ictHardware">ICT hardware</Label>
                  <Input
                    id="ictHardware"
                    name="ictHardware"
                    type="number"
                    value={formData.rdKeyTechnologies.ictHardware}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdKeyTechnologies",
                        "ictHardware",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="software">Software</Label>
                  <Input
                    id="software"
                    name="software"
                    type="number"
                    value={formData.rdKeyTechnologies.software}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdKeyTechnologies",
                        "software",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="artificialIntelligence">
                    Artificial intelligence (AI)
                  </Label>
                  <Input
                    id="artificialIntelligence"
                    name="artificialIntelligence"
                    type="number"
                    value={formData.rdKeyTechnologies.artificialIntelligence}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdKeyTechnologies",
                        "artificialIntelligence",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="biotechnology">Biotechnology</Label>
                  <Input
                    id="biotechnology"
                    name="biotechnology"
                    type="number"
                    value={formData.rdKeyTechnologies.biotechnology}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdKeyTechnologies",
                        "biotechnology",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="renewableEnergy">Renewable energy</Label>
                  <Input
                    id="renewableEnergy"
                    name="renewableEnergy"
                    type="number"
                    value={formData.rdKeyTechnologies.renewableEnergy}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdKeyTechnologies",
                        "renewableEnergy",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 10 && (
          <div className="space-y-4">
            <div>
              <Label>
                Please allocate your company's intramural R&D expenditure in
                2023 by field of R&D (FORD):
              </Label>
              <div className="space-y-2 mt-2">
                <div>
                  <Label htmlFor="naturalSciences">Natural sciences</Label>
                  <Input
                    id="naturalSciences"
                    name="naturalSciences"
                    type="number"
                    value={formData.rdFieldOfResearch.naturalSciences}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdFieldOfResearch",
                        "naturalSciences",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="engineeringAndTechnology">
                    Engineering and Technology
                  </Label>
                  <Input
                    id="engineeringAndTechnology"
                    name="engineeringAndTechnology"
                    type="number"
                    value={formData.rdFieldOfResearch.engineeringAndTechnology}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdFieldOfResearch",
                        "engineeringAndTechnology",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="medicalAndHealthSciences">
                    Medical and Health Sciences
                  </Label>
                  <Input
                    id="medicalAndHealthSciences"
                    name="medicalAndHealthSciences"
                    type="number"
                    value={formData.rdFieldOfResearch.medicalAndHealthSciences}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdFieldOfResearch",
                        "medicalAndHealthSciences",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="agriculturalAndVeterinarySciences">
                    Agricultural and Veterinary Sciences
                  </Label>
                  <Input
                    id="agriculturalAndVeterinarySciences"
                    name="agriculturalAndVeterinarySciences"
                    type="number"
                    value={
                      formData.rdFieldOfResearch
                        .agriculturalAndVeterinarySciences
                    }
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdFieldOfResearch",
                        "agriculturalAndVeterinarySciences",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="socialSciences">Social Sciences</Label>
                  <Input
                    id="socialSciences"
                    name="socialSciences"
                    type="number"
                    value={formData.rdFieldOfResearch.socialSciences}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdFieldOfResearch",
                        "socialSciences",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="humanitiesAndArts">
                    Humanities and the Arts
                  </Label>
                  <Input
                    id="humanitiesAndArts"
                    name="humanitiesAndArts"
                    type="number"
                    value={formData.rdFieldOfResearch.humanitiesAndArts}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdFieldOfResearch",
                        "humanitiesAndArts",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <Label>
                Please allocate your company's intramural R&D expenditure in
                2023 by socio-economic objective (SEO):
              </Label>
              <div className="space-y-2 mt-2">
                <div>
                  <Label htmlFor="earthExploration">
                    Exploration and exploitation of the Earth
                  </Label>
                  <Input
                    id="earthExploration"
                    name="earthExploration"
                    type="number"
                    value={formData.rdSocioEconomicObjective.earthExploration}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "earthExploration",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="environment">Environment</Label>
                  <Input
                    id="environment"
                    name="environment"
                    type="number"
                    value={formData.rdSocioEconomicObjective.environment}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "environment",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="spaceExploration">
                    Exploration and exploitation of space
                  </Label>
                  <Input
                    id="spaceExploration"
                    name="spaceExploration"
                    type="number"
                    value={formData.rdSocioEconomicObjective.spaceExploration}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "spaceExploration",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="transport">
                    Transport, Telecommunication and other Infrastructure
                  </Label>
                  <Input
                    id="transport"
                    name="transport"
                    type="number"
                    value={formData.rdSocioEconomicObjective.transport}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "transport",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="energy">Energy</Label>
                  <Input
                    id="energy"
                    name="energy"
                    type="number"
                    value={formData.rdSocioEconomicObjective.energy}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "energy",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="industrialProduction">
                    Industrial Production and Technology
                  </Label>
                  <Input
                    id="industrialProduction"
                    name="industrialProduction"
                    type="number"
                    value={
                      formData.rdSocioEconomicObjective.industrialProduction
                    }
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "industrialProduction",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="health">Health</Label>
                  <Input
                    id="health"
                    name="health"
                    type="number"
                    value={formData.rdSocioEconomicObjective.health}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "health",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="agriculture">Agriculture</Label>
                  <Input
                    id="agriculture"
                    name="agriculture"
                    type="number"
                    value={formData.rdSocioEconomicObjective.agriculture}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "agriculture",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="education">Education</Label>
                  <Input
                    id="education"
                    name="education"
                    type="number"
                    value={formData.rdSocioEconomicObjective.education}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "education",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="culture">
                    Culture, Recreation, Religion and Mass media
                  </Label>
                  <Input
                    id="culture"
                    name="culture"
                    type="number"
                    value={formData.rdSocioEconomicObjective.culture}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "culture",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="politicalSystems">
                    Political and social systems, structures and processes
                  </Label>
                  <Input
                    id="politicalSystems"
                    name="politicalSystems"
                    type="number"
                    value={formData.rdSocioEconomicObjective.politicalSystems}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "politicalSystems",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="defence">Defence</Label>
                  <Input
                    id="defence"
                    name="defence"
                    type="number"
                    value={formData.rdSocioEconomicObjective.defence}
                    onChange={(e) =>
                      handleNestedInputChange(
                        "rdSocioEconomicObjective",
                        "defence",
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 11 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sources of Funds for R&D</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Source</TableHead>
                  <TableHead>From within KSA</TableHead>
                  <TableHead>From abroad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Parent, affiliated and subsidiary companies
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.parentCompanies.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "parentCompanies",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.parentCompanies.abroad}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "parentCompanies",
                          "abroad",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Non-affiliated companies</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.nonAffiliatedCompanies.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "nonAffiliatedCompanies",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.sourcesOfFunds.nonAffiliatedCompanies.abroad
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "nonAffiliatedCompanies",
                          "abroad",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Government grants or funding</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.governmentGrants.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "governmentGrants",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Government contracts</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.governmentContracts.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "governmentContracts",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Foreign Governments or International Organizations
                  </TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.foreignGovernments.abroad}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "foreignGovernments",
                          "abroad",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Higher Education institutions</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.higherEducation.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "higherEducation",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.higherEducation.abroad}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "higherEducation",
                          "abroad",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Private non-profits (PNP)</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.privateNonProfits.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "privateNonProfits",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.privateNonProfits.abroad}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "privateNonProfits",
                          "abroad",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Own funds</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.ownFunds.ksa}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "ownFunds",
                          "ksa",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.sourcesOfFunds.ownFunds.abroad}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "sourcesOfFunds",
                          "ownFunds",
                          "abroad",
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        {step === 12 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">R&D Tax Credits</h3>
            <div>
              <Label htmlFor="rdTaxCreditsReceived">
                Did your company receive any tax credits or allowances for R&D
                costs (internal or outsourced) incurred in year 2023?
              </Label>
              <RadioGroup
                name="rdTaxCreditsReceived"
                value={formData.rdTaxCredits.received}
                onValueChange={(value) =>
                  handleNestedInputChange("rdTaxCredits", "received", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="rdTaxCreditsReceivedYes" />
                  <Label htmlFor="rdTaxCreditsReceivedYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="rdTaxCreditsReceivedNo" />
                  <Label htmlFor="rdTaxCreditsReceivedNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            {formData.rdTaxCredits.received === "yes" && (
              <div>
                <Label htmlFor="rdTaxCreditsAmount">
                  If so, please report the total amount
                </Label>
                <Input
                  id="rdTaxCreditsAmount"
                  type="number"
                  value={formData.rdTaxCredits.amount}
                  onChange={(e) =>
                    handleNestedInputChange(
                      "rdTaxCredits",
                      "amount",
                      e.target.value
                    )
                  }
                />
              </div>
            )}
          </div>
        )}
        {step === 13 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Extramural R&D</h3>
            <div>
              <Label htmlFor="extramualRDMadePayments">
                Did your company make any payments to others in year 2023 for
                their performance of R&D?
              </Label>
              <RadioGroup
                name="extramualRDMadePayments"
                value={formData.extramualRD.madePayments}
                onValueChange={(value) =>
                  handleNestedInputChange("extramualRD", "madePayments", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="extramualRDMadePaymentsYes" />
                  <Label htmlFor="extramualRDMadePaymentsYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="extramualRDMadePaymentsNo" />
                  <Label htmlFor="extramualRDMadePaymentsNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            {formData.extramualRD.madePayments === "yes" && (
              <div>
                <Label htmlFor="extramualRDTotalAmount">
                  If so, please report the total amount
                </Label>
                <Input
                  id="extramualRDTotalAmount"
                  type="number"
                  value={formData.extramualRD.totalAmount}
                  onChange={(e) =>
                    handleNestedInputChange(
                      "extramualRD",
                      "totalAmount",
                      e.target.value
                    )
                  }
                />
              </div>
            )}
            <h3 className="text-lg font-semibold mt-6">
              R&D-related Intellectual Property (IP)
            </h3>
            <div>
              <Label htmlFor="rdRelatedIPMadePayments">
                Did your company make any payments to others in year 2023 for
                buying or licensing-in rights to use another party's IP from
                their previous R&D?
              </Label>
              <RadioGroup
                name="rdRelatedIPMadePayments"
                value={formData.rdRelatedIP.madePayments}
                onValueChange={(value) =>
                  handleNestedInputChange("rdRelatedIP", "madePayments", value)
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="rdRelatedIPMadePaymentsYes" />
                  <Label htmlFor="rdRelatedIPMadePaymentsYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="rdRelatedIPMadePaymentsNo" />
                  <Label htmlFor="rdRelatedIPMadePaymentsNo">No</Label>
                </div>
              </RadioGroup>
            </div>
            {formData.rdRelatedIP.madePayments === "yes" && (
              <div>
                <Label htmlFor="rdRelatedIPTotalAmount">
                  If so, please report the total amount
                </Label>
                <Input
                  id="rdRelatedIPTotalAmount"
                  type="number"
                  value={formData.rdRelatedIP.totalAmount}
                  onChange={(e) =>
                    handleNestedInputChange(
                      "rdRelatedIP",
                      "totalAmount",
                      e.target.value
                    )
                  }
                />
              </div>
            )}
          </div>
        )}
        {step === 14 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">R&D Personnel</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Function</TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Internal R&D Personnel
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Researchers</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.internal.researchers.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "internal",
                          "researchers",
                          {
                            ...formData.rdPersonnel.internal.researchers,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.internal.researchers.female}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "internal",
                          "researchers",
                          {
                            ...formData.rdPersonnel.internal.researchers,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Technicians and equivalent staff</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.internal.technicians.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "internal",
                          "technicians",
                          {
                            ...formData.rdPersonnel.internal.technicians,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.internal.technicians.female}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "internal",
                          "technicians",
                          {
                            ...formData.rdPersonnel.internal.technicians,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>R&D support staff</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.internal.supportStaff.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "internal",
                          "supportStaff",
                          {
                            ...formData.rdPersonnel.internal.supportStaff,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.internal.supportStaff.female}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "internal",
                          "supportStaff",
                          {
                            ...formData.rdPersonnel.internal.supportStaff,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    External R&D Personnel
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Researchers</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.external.researchers.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "external",
                          "researchers",
                          {
                            ...formData.rdPersonnel.external.researchers,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.external.researchers.female}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "external",
                          "researchers",
                          {
                            ...formData.rdPersonnel.external.researchers,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Technicians and equivalent staff</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.external.technicians.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "external",
                          "technicians",
                          {
                            ...formData.rdPersonnel.external.technicians,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.external.technicians.female}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "external",
                          "technicians",
                          {
                            ...formData.rdPersonnel.external.technicians,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>R&D support staff</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.external.supportStaff.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "external",
                          "supportStaff",
                          {
                            ...formData.rdPersonnel.external.supportStaff,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnel.external.supportStaff.female}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnel",
                          "external",
                          "supportStaff",
                          {
                            ...formData.rdPersonnel.external.supportStaff,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
        {step === 15 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              R&D Personnel by Educational Level
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Educational Level</TableHead>
                  <TableHead colSpan={2}>Researchers</TableHead>
                  <TableHead colSpan={2}>
                    Technicians and R&D support staff
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>PhD (ISCED 8)</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={formData.rdPersonnelEducation.researchers.phd.male}
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelEducation",
                          "researchers",
                          "phd",
                          {
                            ...formData.rdPersonnelEducation.researchers.phd,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelEducation.researchers.phd.female
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelEducation",
                          "researchers",
                          "phd",
                          {
                            ...formData.rdPersonnelEducation.researchers.phd,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelEducation.techniciansAndSupportStaff
                          .phd.male
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelEducation",
                          "techniciansAndSupportStaff",
                          "phd",
                          {
                            ...formData.rdPersonnelEducation
                              .techniciansAndSupportStaff.phd,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelEducation.techniciansAndSupportStaff
                          .phd.female
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelEducation",
                          "techniciansAndSupportStaff",
                          "phd",
                          {
                            ...formData.rdPersonnelEducation
                              .techniciansAndSupportStaff.phd,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                {/* Repeat similar rows for Master's, Bachelor's, Other tertiary-level, and Non-tertiary */}
              </TableBody>
            </Table>
            <h3 className="text-lg font-semibold mt-6">
              R&D Personnel by Citizenship
            </h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Citizenship</TableHead>
                  <TableHead colSpan={2}>Researchers</TableHead>
                  <TableHead colSpan={2}>
                    Technicians and R&D support staff
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>KSA</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship.researchers.ksa.male
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "researchers",
                          "ksa",
                          {
                            ...formData.rdPersonnelCitizenship.researchers.ksa,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship.researchers.ksa.female
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "researchers",
                          "ksa",
                          {
                            ...formData.rdPersonnelCitizenship.researchers.ksa,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship
                          .techniciansAndSupportStaff.ksa.male
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "techniciansAndSupportStaff",
                          "ksa",
                          {
                            ...formData.rdPersonnelCitizenship
                              .techniciansAndSupportStaff.ksa,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship
                          .techniciansAndSupportStaff.ksa.female
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "techniciansAndSupportStaff",
                          "ksa",
                          {
                            ...formData.rdPersonnelCitizenship
                              .techniciansAndSupportStaff.ksa,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Foreign</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship.researchers.foreign.male
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "researchers",
                          "foreign",
                          {
                            ...formData.rdPersonnelCitizenship.researchers
                              .foreign,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship.researchers.foreign
                          .female
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "researchers",
                          "foreign",
                          {
                            ...formData.rdPersonnelCitizenship.researchers
                              .foreign,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship
                          .techniciansAndSupportStaff.foreign.male
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "techniciansAndSupportStaff",
                          "foreign",
                          {
                            ...formData.rdPersonnelCitizenship
                              .techniciansAndSupportStaff.foreign,
                            male: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={
                        formData.rdPersonnelCitizenship
                          .techniciansAndSupportStaff.foreign.female
                      }
                      onChange={(e) =>
                        handleDeepNestedInputChange(
                          "rdPersonnelCitizenship",
                          "techniciansAndSupportStaff",
                          "foreign",
                          {
                            ...formData.rdPersonnelCitizenship
                              .techniciansAndSupportStaff.foreign,
                            female: e.target.value,
                          }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <h3 className="text-lg font-semibold mt-6">R&D Outputs</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="patents"
                  checked={formData.rdOutputs.patents}
                  onCheckedChange={() =>
                    handleCheckboxChange("rdOutputs", "patents")
                  }
                />
                <Label htmlFor="patents">Patents</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="trademarks"
                  checked={formData.rdOutputs.trademarks}
                  onCheckedChange={() =>
                    handleCheckboxChange("rdOutputs", "trademarks")
                  }
                />
                <Label htmlFor="trademarks">Trademarks</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="copyrights"
                  checked={formData.rdOutputs.copyrights}
                  onCheckedChange={() =>
                    handleCheckboxChange("rdOutputs", "copyrights")
                  }
                />
                <Label htmlFor="copyrights">Copyrights</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="industrialDesigns"
                  checked={formData.rdOutputs.industrialDesigns}
                  onCheckedChange={() =>
                    handleCheckboxChange("rdOutputs", "industrialDesigns")
                  }
                />
                <Label htmlFor="industrialDesigns">Industrial designs</Label>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-6">R&D Collaboration</h3>
            <div className="space-y-4">
              <div>
                <Label>KSA</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ksaEnterprises"
                      checked={formData.rdCollaboration.ksa.includes(
                        "enterprises"
                      )}
                      onCheckedChange={() =>
                        handleCollaborationChange("ksa", "enterprises")
                      }
                    />
                    <Label htmlFor="ksaEnterprises">
                      Enterprises within your enterprise group
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ksaBusinessEnterprises"
                      checked={formData.rdCollaboration.ksa.includes(
                        "businessEnterprises"
                      )}
                      onCheckedChange={() =>
                        handleCollaborationChange("ksa", "businessEnterprises")
                      }
                    />
                    <Label htmlFor="ksaBusinessEnterprises">
                      Business enterprises outside your enterprise group
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ksaUniversities"
                      checked={formData.rdCollaboration.ksa.includes(
                        "universities"
                      )}
                      onCheckedChange={() =>
                        handleCollaborationChange("ksa", "universities")
                      }
                    />
                    <Label htmlFor="ksaUniversities">
                      Universities or other higher education institutions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ksaGovernment"
                      checked={formData.rdCollaboration.ksa.includes(
                        "government"
                      )}
                      onCheckedChange={() =>
                        handleCollaborationChange("ksa", "government")
                      }
                    />
                    <Label htmlFor="ksaGovernment">
                      Government or public research institutes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ksaNonProfit"
                      checked={formData.rdCollaboration.ksa.includes(
                        "nonProfit"
                      )}
                      onCheckedChange={() =>
                        handleCollaborationChange("ksa", "nonProfit")
                      }
                    />
                    <Label htmlFor="ksaNonProfit">
                      Non-profit organizations
                    </Label>
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for Gulf States and Non-Gulf States */}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && <Button onClick={handlePrevious}>Previous</Button>}
        {step < totalSteps ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={() => console.log(formData)}>Submit</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Form;
