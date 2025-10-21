// FHIR Mapping Wiki - Main Application Logic

// Content data for all pages
const content = {
    intro: {
        title: 'Introduction to FHIR',
        content: `
            <h1>Introduction to FHIR</h1>

            <div class="info-box">
                <strong>What is FHIR?</strong><br>
                FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare information electronically.
            </div>

            <h2>Overview</h2>
            <p>FHIR is a next-generation standards framework created by HL7. It combines the best features of HL7's v2, v3, and CDA product lines while leveraging the latest web standards and applying a tight focus on implementability.</p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>RESTful API:</strong> Based on modern web standards (HTTP, JSON, XML)</li>
                <li><strong>Resources:</strong> Modular components representing healthcare concepts</li>
                <li><strong>Extensibility:</strong> Flexible framework that can be adapted to local requirements</li>
                <li><strong>Implementability:</strong> Designed to be easy to implement and use</li>
            </ul>

            <h2>FHIR Resources</h2>
            <p>FHIR defines a set of "resources" that represent granular clinical concepts. Examples include:</p>
            <ul>
                <li>Patient - Demographics and administrative information</li>
                <li>Observation - Measurements and simple assertions</li>
                <li>Condition - Detailed information about conditions, problems, or diagnoses</li>
                <li>Medication - Definition of a medication</li>
                <li>Procedure - An action performed on a patient</li>
            </ul>

            <h2>Data Formats</h2>
            <p>FHIR resources can be represented in multiple formats:</p>
            <ul>
                <li><strong>JSON</strong> - JavaScript Object Notation (most common)</li>
                <li><strong>XML</strong> - eXtensible Markup Language</li>
                <li><strong>RDF</strong> - Resource Description Framework</li>
            </ul>

            <h3>Example FHIR Resource (JSON)</h3>
            <pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "example",
  "name": [{
    "use": "official",
    "family": "Doe",
    "given": ["John", "Robert"]
  }],
  "gender": "male",
  "birthDate": "1974-12-25"
}</code></pre>

            <h2>Learn More</h2>
            <p>Visit the official <a href="https://www.hl7.org/fhir/" target="_blank">FHIR website</a> for complete documentation and specifications.</p>
        `
    },

    'why-mapping': {
        title: 'Why FHIR Mapping?',
        content: `
            <h1>Why FHIR Mapping?</h1>

            <h2>The Challenge</h2>
            <p>Healthcare organizations often need to exchange data between systems that use different data models, formats, and standards. This creates significant interoperability challenges.</p>

            <h2>The Solution: FHIR Mapping</h2>
            <p>FHIR mapping provides a standardized way to transform data from one format to another, enabling seamless data exchange between disparate healthcare systems.</p>

            <h2>Common Use Cases</h2>

            <h3>1. Legacy System Integration</h3>
            <p>Transform data from legacy HL7 v2 or v3 messages into FHIR resources.</p>
            <div class="info-box">
                <strong>Example:</strong> Converting HL7 v2 ADT messages to FHIR Patient and Encounter resources
            </div>

            <h3>2. Custom Data Models</h3>
            <p>Map proprietary or vendor-specific data models to standardized FHIR resources.</p>

            <h3>3. Cross-Border Exchange</h3>
            <p>Transform data between different national or regional FHIR profiles.</p>

            <h3>4. Data Migration</h3>
            <p>Facilitate migration from one EHR system to another while maintaining data integrity.</p>

            <h2>Benefits</h2>
            <ul>
                <li><strong>Standardization:</strong> Use industry-standard approaches for data transformation</li>
                <li><strong>Maintainability:</strong> Document mappings in a clear, declarative format</li>
                <li><strong>Reusability:</strong> Share and reuse mapping definitions across projects</li>
                <li><strong>Validation:</strong> Leverage FHIR's built-in validation capabilities</li>
                <li><strong>Automation:</strong> Enable automated data transformation pipelines</li>
            </ul>

            <h2>Mapping Approaches</h2>

            <h3>StructureMap</h3>
            <p>FHIR's native mapping language that provides a declarative syntax for defining transformations.</p>

            <h3>FHIR Path</h3>
            <p>A path-based navigation and extraction language for FHIR resources.</p>

            <h3>Custom Code</h3>
            <p>Programmatic transformations using FHIR libraries and SDKs.</p>

            <div class="success-box">
                <strong>Best Practice:</strong> Start with StructureMap for declarative mappings, and use custom code only when necessary for complex transformations.
            </div>
        `
    },

    'quick-start': {
        title: 'Quick Start Guide',
        content: `
            <h1>Quick Start Guide</h1>

            <h2>Getting Started with FHIR Mapping</h2>
            <p>This guide will walk you through creating your first FHIR mapping in just a few steps.</p>

            <h2>Prerequisites</h2>
            <ul>
                <li>Basic understanding of FHIR resources</li>
                <li>Familiarity with JSON or XML</li>
                <li>A FHIR server or validation tool (optional but recommended)</li>
            </ul>

            <h2>Step 1: Identify Your Source and Target</h2>
            <p>First, determine what you're mapping FROM and TO:</p>
            <ul>
                <li><strong>Source:</strong> Your input data (e.g., CSV, HL7 v2, custom JSON)</li>
                <li><strong>Target:</strong> The FHIR resource(s) you want to create</li>
            </ul>

            <div class="info-box">
                <strong>Example:</strong> Mapping a simple patient CSV to a FHIR Patient resource
            </div>

            <h2>Step 2: Create Your Mapping Definition</h2>

            <h3>Simple Example: CSV to Patient</h3>
            <p>Source CSV:</p>
            <pre><code>id,first_name,last_name,dob,gender
001,John,Doe,1974-12-25,male</code></pre>

            <p>Target FHIR Patient (JSON):</p>
            <pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "001",
  "name": [{
    "given": ["John"],
    "family": "Doe"
  }],
  "birthDate": "1974-12-25",
  "gender": "male"
}</code></pre>

            <h2>Step 3: Implement the Mapping</h2>

            <h3>Using JavaScript</h3>
            <pre><code class="language-javascript">function mapCSVToPatient(csvRow) {
  return {
    resourceType: "Patient",
    id: csvRow.id,
    name: [{
      given: [csvRow.first_name],
      family: csvRow.last_name
    }],
    birthDate: csvRow.dob,
    gender: csvRow.gender
  };
}</code></pre>

            <h2>Step 4: Validate Your Output</h2>
            <p>Use FHIR validation tools to ensure your mapped resources are valid:</p>
            <ul>
                <li><a href="https://www.hl7.org/fhir/validator/" target="_blank">Official FHIR Validator</a></li>
                <li><a href="https://fhirvalidator.org/" target="_blank">Online FHIR Validator</a></li>
                <li>HAPI FHIR Validator (Java library)</li>
            </ul>

            <h2>Step 5: Test and Iterate</h2>
            <div class="warning-box">
                <strong>Important:</strong> Always test your mappings with real data and edge cases before deploying to production.
            </div>

            <h2>Next Steps</h2>
            <ul>
                <li>Explore <a href="#patient-mapping">Patient Mapping examples</a></li>
                <li>Learn about <a href="#structuremap">StructureMap</a> for declarative mappings</li>
                <li>Review <a href="#validation">validation strategies</a></li>
            </ul>
        `
    },

    resources: {
        title: 'FHIR Resources',
        content: `
            <h1>FHIR Resources</h1>

            <h2>What are FHIR Resources?</h2>
            <p>Resources are the fundamental building blocks of FHIR. Each resource represents a specific healthcare concept with a well-defined structure and meaning.</p>

            <h2>Resource Categories</h2>

            <h3>1. Foundation Resources</h3>
            <table>
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Description</th>
                        <th>Common Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Patient</td>
                        <td>Demographics and administrative information</td>
                        <td>Identity management, registration</td>
                    </tr>
                    <tr>
                        <td>Practitioner</td>
                        <td>Healthcare professional information</td>
                        <td>Provider directories, care team</td>
                    </tr>
                    <tr>
                        <td>Organization</td>
                        <td>Healthcare organization details</td>
                        <td>Facility management, network</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>Physical places and positions</td>
                        <td>Facility management, routing</td>
                    </tr>
                </tbody>
            </table>

            <h3>2. Clinical Resources</h3>
            <table>
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Description</th>
                        <th>Common Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Observation</td>
                        <td>Measurements and simple assertions</td>
                        <td>Lab results, vital signs</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>Problems, diagnoses, concerns</td>
                        <td>Problem lists, diagnosis tracking</td>
                    </tr>
                    <tr>
                        <td>Procedure</td>
                        <td>Actions performed on patients</td>
                        <td>Surgical history, procedures</td>
                    </tr>
                    <tr>
                        <td>Medication</td>
                        <td>Medication definitions</td>
                        <td>Formulary, medication management</td>
                    </tr>
                    <tr>
                        <td>MedicationRequest</td>
                        <td>Prescription or medication order</td>
                        <td>E-prescribing, medication orders</td>
                    </tr>
                </tbody>
            </table>

            <h3>3. Workflow Resources</h3>
            <table>
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Description</th>
                        <th>Common Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Encounter</td>
                        <td>Interaction between patient and provider</td>
                        <td>Visit tracking, billing</td>
                    </tr>
                    <tr>
                        <td>Appointment</td>
                        <td>Scheduled healthcare event</td>
                        <td>Scheduling, calendar management</td>
                    </tr>
                    <tr>
                        <td>Task</td>
                        <td>Work item or action to be performed</td>
                        <td>Workflow management, orders</td>
                    </tr>
                </tbody>
            </table>

            <h2>Resource Structure</h2>
            <p>Every FHIR resource has a consistent structure:</p>

            <pre><code class="language-json">{
  "resourceType": "ResourceName",
  "id": "unique-identifier",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-01-15T10:30:00Z"
  },
  "text": {
    "status": "generated",
    "div": "<div>Human-readable narrative</div>"
  },
  // Resource-specific data elements
}</code></pre>

            <h2>Common Elements</h2>
            <ul>
                <li><strong>resourceType:</strong> The type of resource (required)</li>
                <li><strong>id:</strong> Logical identifier for the resource</li>
                <li><strong>meta:</strong> Metadata about the resource</li>
                <li><strong>text:</strong> Human-readable narrative</li>
                <li><strong>extension:</strong> Additional content defined by implementations</li>
            </ul>

            <div class="info-box">
                <strong>Tip:</strong> Use the <a href="https://www.hl7.org/fhir/resourcelist.html" target="_blank">official FHIR resource list</a> to explore all available resources and their structures.
            </div>

            <h2>Resource References</h2>
            <p>Resources can reference other resources to create relationships:</p>

            <pre><code class="language-json">{
  "resourceType": "Observation",
  "subject": {
    "reference": "Patient/example",
    "display": "John Doe"
  },
  "performer": [{
    "reference": "Practitioner/example",
    "display": "Dr. Smith"
  }]
}</code></pre>
        `
    },

    'patient-mapping': {
        title: 'Patient Mapping',
        content: `
            <h1>Patient Mapping</h1>

            <h2>Overview</h2>
            <p>The Patient resource is one of the most commonly mapped resources. It contains demographic and administrative information about an individual receiving healthcare services.</p>

            <h2>Patient Resource Structure</h2>
            <pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "example",
  "identifier": [{
    "system": "http://hospital.example.org/patients",
    "value": "12345"
  }],
  "active": true,
  "name": [{
    "use": "official",
    "family": "Doe",
    "given": ["John", "Robert"],
    "prefix": ["Mr."]
  }],
  "telecom": [{
    "system": "phone",
    "value": "+1-555-123-4567",
    "use": "home"
  }, {
    "system": "email",
    "value": "john.doe@example.com"
  }],
  "gender": "male",
  "birthDate": "1974-12-25",
  "address": [{
    "use": "home",
    "line": ["123 Main St", "Apt 4B"],
    "city": "Springfield",
    "state": "IL",
    "postalCode": "62701",
    "country": "USA"
  }]
}</code></pre>

            <h2>Common Mapping Scenarios</h2>

            <h3>Scenario 1: Database to FHIR</h3>
            <p>Source: Relational database table</p>

            <h4>SQL Table Structure</h4>
            <pre><code class="language-sql">CREATE TABLE patients (
  patient_id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  date_of_birth DATE,
  gender CHAR(1),
  phone VARCHAR(20),
  email VARCHAR(100)
);</code></pre>

            <h4>Mapping Logic</h4>
            <pre><code class="language-javascript">function mapDatabaseToPatient(dbRow) {
  return {
    resourceType: "Patient",
    id: dbRow.patient_id.toString(),
    identifier: [{
      system: "http://hospital.example.org/patients",
      value: dbRow.patient_id.toString()
    }],
    name: [{
      given: [dbRow.first_name],
      family: dbRow.last_name
    }],
    gender: dbRow.gender === 'M' ? 'male' :
            dbRow.gender === 'F' ? 'female' : 'unknown',
    birthDate: dbRow.date_of_birth,
    telecom: [
      {
        system: "phone",
        value: dbRow.phone
      },
      {
        system: "email",
        value: dbRow.email
      }
    ].filter(t => t.value) // Remove empty values
  };
}</code></pre>

            <h3>Scenario 2: HL7 v2 to FHIR</h3>
            <p>Source: HL7 v2 ADT message (PID segment)</p>

            <h4>Sample HL7 v2 Message</h4>
            <pre><code>PID|1||12345^^^MRN||Doe^John^Robert^Mr.||19741225|M|||123 Main St^^Springfield^IL^62701^USA||555-123-4567||||||</code></pre>

            <h4>Mapping Notes</h4>
            <table>
                <thead>
                    <tr>
                        <th>HL7 v2 Field</th>
                        <th>FHIR Element</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PID-3</td>
                        <td>identifier</td>
                        <td>Patient identifiers</td>
                    </tr>
                    <tr>
                        <td>PID-5</td>
                        <td>name</td>
                        <td>Patient name components</td>
                    </tr>
                    <tr>
                        <td>PID-7</td>
                        <td>birthDate</td>
                        <td>Date format conversion needed</td>
                    </tr>
                    <tr>
                        <td>PID-8</td>
                        <td>gender</td>
                        <td>Code mapping required</td>
                    </tr>
                    <tr>
                        <td>PID-11</td>
                        <td>address</td>
                        <td>Address components</td>
                    </tr>
                    <tr>
                        <td>PID-13</td>
                        <td>telecom</td>
                        <td>Phone numbers</td>
                    </tr>
                </tbody>
            </table>

            <h2>Best Practices</h2>

            <div class="success-box">
                <h4>Required Elements</h4>
                <p>While FHIR has minimal required elements, consider including:</p>
                <ul>
                    <li>At least one identifier</li>
                    <li>At least one name</li>
                    <li>Gender (if known)</li>
                    <li>Birth date (if known)</li>
                </ul>
            </div>

            <div class="warning-box">
                <h4>Common Pitfalls</h4>
                <ul>
                    <li><strong>Date formats:</strong> Always use YYYY-MM-DD format</li>
                    <li><strong>Gender values:</strong> Must be male, female, other, or unknown</li>
                    <li><strong>Phone numbers:</strong> Include country code when possible</li>
                    <li><strong>Empty arrays:</strong> Remove empty telecom/address arrays</li>
                </ul>
            </div>

            <h2>Validation Checklist</h2>
            <ul>
                <li>✓ resourceType is "Patient"</li>
                <li>✓ Gender uses valid codes</li>
                <li>✓ Birth date format is correct</li>
                <li>✓ Identifiers have both system and value</li>
                <li>✓ Name has at least family or given</li>
                <li>✓ Telecom entries have system and value</li>
            </ul>

            <h2>Complete Example with Extensions</h2>
            <pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "example-extended",
  "extension": [{
    "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
    "extension": [{
      "url": "ombCategory",
      "valueCoding": {
        "system": "urn:oid:2.16.840.1.113883.6.238",
        "code": "2106-3",
        "display": "White"
      }
    }]
  }],
  "identifier": [{
    "use": "official",
    "type": {
      "coding": [{
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "MR"
      }]
    },
    "system": "http://hospital.example.org/patients",
    "value": "12345"
  }],
  "active": true,
  "name": [{
    "use": "official",
    "family": "Doe",
    "given": ["John", "Robert"]
  }],
  "gender": "male",
  "birthDate": "1974-12-25"
}</code></pre>
        `
    },

    'structuremap': {
        title: 'StructureMap',
        content: `
            <h1>FHIR StructureMap</h1>

            <h2>What is StructureMap?</h2>
            <p>StructureMap is FHIR's native resource for defining transformations between different data structures. It provides a declarative language for specifying how to convert data from one format to another.</p>

            <h2>Why Use StructureMap?</h2>
            <ul>
                <li><strong>Declarative:</strong> Define transformations without writing imperative code</li>
                <li><strong>Standardized:</strong> Use FHIR's official mapping syntax</li>
                <li><strong>Shareable:</strong> Maps can be shared as FHIR resources</li>
                <li><strong>Executable:</strong> Can be executed by FHIR mapping engines</li>
                <li><strong>Documented:</strong> Self-documenting transformation logic</li>
            </ul>

            <h2>Basic Structure</h2>
            <pre><code class="language-json">{
  "resourceType": "StructureMap",
  "id": "example",
  "url": "http://example.org/fhir/StructureMap/example",
  "name": "ExampleMap",
  "status": "draft",
  "structure": [{
    "url": "http://example.org/StructureDefinition/source",
    "mode": "source"
  }, {
    "url": "http://hl7.org/fhir/StructureDefinition/Patient",
    "mode": "target"
  }],
  "group": [{
    "name": "main",
    "typeMode": "none",
    "input": [{
      "name": "source",
      "mode": "source"
    }, {
      "name": "target",
      "mode": "target"
    }],
    "rule": []
  }]
}</code></pre>

            <h2>Mapping Language Syntax</h2>
            <p>StructureMap also has a text-based syntax that's more readable:</p>

            <h3>Simple Example</h3>
            <pre><code>map "http://example.org/fhir/StructureMap/PatientMap" = "PatientMap"

uses "http://example.org/StructureDefinition/SourcePatient" as source
uses "http://hl7.org/fhir/StructureDefinition/Patient" as target

group PatientTransform(source src, target tgt) {
  src.id -> tgt.id;
  src.firstName -> tgt.name.given;
  src.lastName -> tgt.name.family;
  src.dob -> tgt.birthDate;
  src.gender -> tgt.gender;
}</code></pre>

            <h2>Key Concepts</h2>

            <h3>1. Simple Copy</h3>
            <p>Direct copy from source to target:</p>
            <pre><code>src.id -> tgt.id;</code></pre>

            <h3>2. Value Transformation</h3>
            <p>Transform values during mapping:</p>
            <pre><code>src.sex as s where s = 'M' -> tgt.gender = 'male';
src.sex as s where s = 'F' -> tgt.gender = 'female';</code></pre>

            <h3>3. Create New Element</h3>
            <p>Create and populate a new structure:</p>
            <pre><code>src.phoneNumber as ph -> tgt.telecom as tel then {
  ph -> tel.system = 'phone';
  ph -> tel.value = ph;
};</code></pre>

            <h3>4. Conditional Mapping</h3>
            <p>Apply rules based on conditions:</p>
            <pre><code>src.email as e where e.exists() -> tgt.telecom as tel then {
  e -> tel.system = 'email';
  e -> tel.value = e;
};</code></pre>

            <h2>Complete Example: CSV to Patient</h2>

            <h3>Source Data Structure</h3>
            <pre><code>id,firstName,lastName,dob,sex,phone,email
001,John,Doe,1974-12-25,M,555-1234,john@example.com</code></pre>

            <h3>StructureMap</h3>
            <pre><code>map "http://example.org/fhir/StructureMap/CSVToPatient" = "CSVToPatient"

uses "http://example.org/StructureDefinition/CSVPatient" as source
uses "http://hl7.org/fhir/StructureDefinition/Patient" as target

group Main(source src : CSVPatient, target tgt : Patient) {
  // Copy ID
  src.id -> tgt.id;

  // Map name
  src -> tgt.name as name then {
    src.firstName -> name.given;
    src.lastName -> name.family;
  };

  // Map birth date
  src.dob -> tgt.birthDate;

  // Map gender with transformation
  src.sex as s where s = 'M' -> tgt.gender = 'male';
  src.sex as s where s = 'F' -> tgt.gender = 'female';

  // Map phone
  src.phone as p where p.exists() -> tgt.telecom as tel then {
    p -> tel.system = 'phone';
    p -> tel.value = p;
  };

  // Map email
  src.email as e where e.exists() -> tgt.telecom as tel then {
    e -> tel.system = 'email';
    e -> tel.value = e;
  };
}</code></pre>

            <h2>Advanced Features</h2>

            <h3>Nested Groups</h3>
            <p>Break complex mappings into reusable groups:</p>
            <pre><code>group Main(source src, target tgt) {
  src -> tgt.name as name then MapName(src, name);
}

group MapName(source src, target name) {
  src.firstName -> name.given;
  src.lastName -> name.family;
}</code></pre>

            <h3>Dependent Rules</h3>
            <p>Create complex nested structures:</p>
            <pre><code>src.address as addr -> tgt.address as tgtAddr then {
  addr.street -> tgtAddr.line;
  addr.city -> tgtAddr.city;
  addr.state -> tgtAddr.state;
  addr.zip -> tgtAddr.postalCode;
};</code></pre>

            <h2>Execution Engines</h2>
            <p>Several tools can execute StructureMaps:</p>
            <ul>
                <li><strong>HAPI FHIR:</strong> Java-based FHIR server with mapping support</li>
                <li><strong>Firely .NET SDK:</strong> .NET library with StructureMap execution</li>
                <li><strong>Matchbox:</strong> Open-source mapping engine</li>
                <li><strong>FHIR Mapping Language:</strong> Reference implementation</li>
            </ul>

            <div class="info-box">
                <strong>Tool Recommendation:</strong> Start with the <a href="https://hapifhir.io/" target="_blank">HAPI FHIR</a> reference implementation for learning and testing StructureMaps.
            </div>

            <h2>Testing Your Maps</h2>
            <pre><code class="language-javascript">// Using HAPI FHIR StructureMap execution
const structureMapUtilities = new StructureMapUtilities(context);
const map = structureMapUtilities.parse(mapText);

const source = { /* source data */ };
const target = new Patient();

structureMapUtilities.transform(context, source, map, target);

// Validate the result
const validator = context.newValidator();
const result = validator.validate(target);
console.log(result.isSuccessful());</code></pre>

            <h2>Best Practices</h2>
            <div class="success-box">
                <ul>
                    <li>Keep maps focused on single resource transformations</li>
                    <li>Use descriptive names for groups and variables</li>
                    <li>Document complex transformations with comments</li>
                    <li>Test maps with edge cases and missing data</li>
                    <li>Version your StructureMaps like any other FHIR resource</li>
                </ul>
            </div>
        `
    },

    glossary: {
        title: 'Glossary',
        content: `
            <h1>FHIR Mapping Glossary</h1>

            <h2>A</h2>
            <p><strong>API (Application Programming Interface):</strong> A set of protocols for building and integrating application software.</p>

            <h2>B</h2>
            <p><strong>Bundle:</strong> A FHIR resource that contains a collection of other resources, used for grouping related resources together.</p>

            <h2>C</h2>
            <p><strong>CodeableConcept:</strong> A FHIR data type representing a value that can be coded using one or more coding systems.</p>
            <p><strong>Coding:</strong> A representation of a defined concept using a symbol from a defined code system.</p>

            <h2>D</h2>
            <p><strong>Data Type:</strong> A specification of the format and valid values for a piece of data.</p>

            <h2>E</h2>
            <p><strong>EHR (Electronic Health Record):</strong> Digital version of a patient's medical history.</p>
            <p><strong>Extension:</strong> A mechanism to add additional content to FHIR resources beyond the base specification.</p>

            <h2>F</h2>
            <p><strong>FHIR (Fast Healthcare Interoperability Resources):</strong> A standard for exchanging healthcare information electronically.</p>
            <p><strong>FHIRPath:</strong> A path-based navigation and extraction language for FHIR resources.</p>

            <h2>H</h2>
            <p><strong>HL7 (Health Level Seven):</strong> An international standards organization for healthcare information exchange.</p>

            <h2>I</h2>
            <p><strong>Identifier:</strong> A unique reference to a resource or entity.</p>
            <p><strong>Interoperability:</strong> The ability of different systems to exchange and use information.</p>

            <h2>J</h2>
            <p><strong>JSON (JavaScript Object Notation):</strong> A lightweight data-interchange format commonly used with FHIR.</p>

            <h2>M</h2>
            <p><strong>Mapping:</strong> The process of transforming data from one format to another.</p>
            <p><strong>Metadata:</strong> Data that describes other data.</p>

            <h2>P</h2>
            <p><strong>Profile:</strong> A set of constraints on a FHIR resource for a specific use case.</p>

            <h2>R</h2>
            <p><strong>Reference:</strong> A link from one FHIR resource to another.</p>
            <p><strong>Resource:</strong> A fundamental building block of FHIR representing a healthcare concept.</p>
            <p><strong>REST (Representational State Transfer):</strong> An architectural style for web services used by FHIR.</p>

            <h2>S</h2>
            <p><strong>StructureDefinition:</strong> A FHIR resource that defines the structure and constraints for other resources.</p>
            <p><strong>StructureMap:</strong> A FHIR resource for defining transformations between data structures.</p>

            <h2>T</h2>
            <p><strong>Terminology:</strong> The vocabulary and code systems used in healthcare data.</p>

            <h2>V</h2>
            <p><strong>Validation:</strong> The process of checking if data conforms to specified rules and constraints.</p>
            <p><strong>ValueSet:</strong> A selection of codes from one or more code systems for a particular purpose.</p>

            <h2>X</h2>
            <p><strong>XML (eXtensible Markup Language):</strong> A markup language used as an alternative format for FHIR resources.</p>
        `
    }
};

// Application state
let currentPage = 'intro';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    loadPage('intro');
});

// Navigation handling
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-section a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });
}

// Load page content
function loadPage(pageId) {
    const contentArea = document.getElementById('content');

    if (content[pageId]) {
        contentArea.innerHTML = content[pageId].content;
        currentPage = pageId;

        // Update active nav link
        updateActiveNavLink(pageId);

        // Scroll to top
        window.scrollTo(0, 0);

        // Re-apply syntax highlighting
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    } else {
        contentArea.innerHTML = `
            <h1>Page Not Found</h1>
            <p>The requested page could not be found.</p>
            <a href="#intro" onclick="loadPage('intro')">Return to Introduction</a>
        `;
    }
}

// Update active navigation link
function updateActiveNavLink(pageId) {
    const navLinks = document.querySelectorAll('.nav-section a');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchContent(query);
    });
}

// Search through content
function searchContent(query) {
    const navLinks = document.querySelectorAll('.nav-section li');

    if (!query) {
        navLinks.forEach(item => {
            item.style.display = 'block';
        });
        return;
    }

    navLinks.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            const text = link.textContent.toLowerCase();
            const page = link.getAttribute('data-page');
            const pageContent = content[page] ? content[page].content.toLowerCase() : '';

            if (text.includes(query) || pageContent.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Handle browser back/forward
window.addEventListener('popstate', function(e) {
    const hash = window.location.hash.substring(1);
    if (hash && content[hash]) {
        loadPage(hash);
    }
});

// Update URL hash when loading pages
function loadPage(pageId) {
    window.location.hash = pageId;
    const contentArea = document.getElementById('content');

    if (content[pageId]) {
        contentArea.innerHTML = content[pageId].content;
        currentPage = pageId;
        updateActiveNavLink(pageId);
        window.scrollTo(0, 0);

        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    }
}
